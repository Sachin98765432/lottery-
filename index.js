const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./model');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// API Routes
app.get('/data', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.post('/data', async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.json({ message: 'Data added' });
});

app.put('/data/:id', async (req, res) => {
  await Data.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Data updated' });
});

app.delete('/data/:id', async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.json({ message: 'Data deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
