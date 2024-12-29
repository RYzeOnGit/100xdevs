const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const n = req.query.n;
  const sum =   n*(n+1)/2;
  res.send(`Sum of 1 to ${n} is ${sum}`);
})
app.listen(3000)