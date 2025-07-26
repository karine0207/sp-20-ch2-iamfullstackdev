
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


let tasks = [
  { _id: '1', title: 'Tarea de ejemplo', completed: false }
];


app.get('/', (req, res) => {
  res.json(tasks);
});


app.post('/create', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Falta el título' });

  const newTask = {
    _id: Date.now().toString(),
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en http://localhost:${PORT}`);
});
