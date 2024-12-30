// Playing with postman
const fs = require('fs');
const express = require('express');
const app = express();
//Route handler
app.get('/', (req, res) => {
  const n = req.query.n;
  const sum =   n*(n+1)/2;
  res.send(`Sum of 1 to ${n} is ${sum}`);
})
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
  })
app.get('/wasd', (req, res) => {
    const n = req.query.n;
    const sum =   n*n
    res.send(`Square of ${n} is ${sum}`);
  })
app.listen(3000)