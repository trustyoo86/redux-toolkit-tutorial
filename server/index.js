'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const testMock = require('./mockups/test');

const app = express();
app.use(bodyParser.json());

app.get('/api/test', () => {
  app.status(200).json(testMock);
});

app.listen(4000, () => {
  console.log('app listen port 4000');
});
