// FileSystem based todo with express functionality and testing with postman
const fs = require('fs');
const express = require('express');
const app = express();

const filepath = "./todos.json";
//Route handler
app.get('/', (req, res) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      res.send(err);
    }
    let todos = [];
    try {
      todos = JSON.parse(data);
    } catch (err) {
      todos = [];
    }
    if (todos.length === 0) {
        res.send('No tasks found');
    }
    else{
        res.send(todos);
    }
    });
});
app.post('/', (req, res) => {
    const n = req.body.n; // Get the task from the request body

    // Read the file
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error reading file");
        }

        let todos = [];
        try {
            todos = JSON.parse(data); // Parse the file content as JSON
        } catch (err) {
            console.log("Error parsing JSON", err);
            todos = []; // Default to an empty array if parsing fails
        }

        // Add the new task
        todos.push({ title: n, id: todos.length + 1 });

        // Write the updated data back to the file
        fs.writeFile(filepath, JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Error saving data");
            } else {
                res.send(`Task added: ${n}`);
            }
        });
    });
});
  app.put('/', (req, res) => {
    const n = parseInt(req.query.n); // Convert `n` to a number
    const task = req.query.task; // New task title

    // Read the file
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error reading file');
        }

        let todos = [];
        try {
            todos = JSON.parse(data); // Parse the file content as JSON
        } catch (err) {
            console.log('Error parsing JSON', err);
            return res.status(500).send('Error parsing data');
        }

        let found = false;

        // Update the task
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === n) {
                todos[i].title = task;
                found = true;
                break;
            }
        }

        if (!found) {
            return res.send('Task not found');
        }

        // Write the updated data back to the file
        fs.writeFile(filepath, JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                console.log('Error writing file', err);
                return res.status(500).send('Error saving data');
            } else {
                res.send(`Task updated: ${task}`);
            }
        });
    });
});
app.delete('/', (req, res) => {
    const n = parseInt(req.query.n);
    fs.readFile(filepath, 'utf8', (err, data) => {
          if (err) {
            res.log(err);
          }
          let todos = [];
          try {
            todos = JSON.parse(data);
          } catch (err) {
            todos = [];
          }
          let found = false;
          temp = -1;
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === n) {
              temp = i;  
              todos.splice(i, 1);
              found = true;
              break;
            }
          }
          if (found){
            for (let i = 0; i < todos.length; i++) {
              if(i >= temp){
                todos[i].id = todos[i].id - 1;
              }
            }
          }
          if (!found){
            console.log('Task not found');  
          }
          fs.writeFile(filepath, JSON.stringify(todos), (err) => {
            if (err) {
              res.send(err);
            } else {
              if (found){
              res.send(`Task deleted`);
              res.send(todos
              }
            }
          });
        });
  });
app.listen(3000); //start server