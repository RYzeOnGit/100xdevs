// FileSystem based todo with express functionality and testing with postman
const fs = require('fs');
const express = require('express');
const app = express();

const filepath = "./todos.json";
//Route handler
app.get('/', (req, res) => {
  const n = req.query.n;
  n = n.trim().toLowerCase();
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    let todos = [];
    try {
      todos = JSON.parse(data);
    } catch (err) {
      todos = [];
    }
    if (!todos){
        res.send('No tasks found');
    }
    else{
        res.send(todos);
    }
    });
})
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
  })
app.put('/', (req, res) => {
    res.send('PUT request to the homepage');
  })
app.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
  })
app.listen(3000); //start server