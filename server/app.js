const path = require('path');
const express = require('express');
const morgan = require('morgan');
const userRouters=require('./routes/userRouters');
const eventRouters=require('./routes/eventRouters');

const app = express();
const reg=/^(\/|\/login)$/;
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.resolve('dist')));

app.get(reg, (req, res) => {
  res.sendFile(path.resolve('dist','index.html'));
});

app.use(userRouters);
app.use(eventRouters);



module.exports=app;