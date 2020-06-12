'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const testMock = require('./mockups/test');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mocks = testMock;

app.get('/api/test', (req, res) => {
  res.status(200).json(mocks);
});

app.post('/api/test', (req, res) => {
  const data = req.body;
  mocks.push(data);
  res.status(200).json({ msg: 'success' });
});

app.listen(4000, () => {
  console.log('app listen port 4000');
});
