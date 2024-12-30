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
})
app.post('/', (req, res) => {
    n = req.body.n;
    fs.readFile(filepath, "utf8", (err, data) => {
              if (err) {
                  res.send(err);
              }
              let todos = [];
              try {
                  todos = JSON.parse(data);
              } catch (err) {
                  todos = [];
              }
            });
              todos.push({ title: n, id: todos.length + 1 });
              fs.writeFile(filepath, JSON.stringify(todos), (err) => {
                  if (err) {
                      res.send(err);
                  } else {
                      res.send(`Task added: ${n}`);
                  }
              });

  })
app.put('/', (req, res) => {
    n = req.query.n; //Id to update
  })
app.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
  })
app.listen(3000); //start server