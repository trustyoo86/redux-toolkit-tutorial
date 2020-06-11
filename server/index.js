'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const testMock = require('./mockups/test');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/test', (req, res) => {
  res.status(200).json(testMock);
});

app.listen(4000, () => {
  console.log('app listen port 4000');
});
