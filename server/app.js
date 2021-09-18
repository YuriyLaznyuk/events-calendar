const path = require('path');
const express = require('express');
const morgan = require('morgan');
const userRouters=require('./routes/userRouters');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.resolve('dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist','index.html'));
});

app.use(userRouters);



module.exports=app;