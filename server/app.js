const path = require('path');
const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.resolve('dist')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

module.exports=app;