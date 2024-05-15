// app.js
const express = require('express');
const app = express();
const PORT = 3000;

let todos = [];

app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
