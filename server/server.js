const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const PORT = process.env.PORT || 7070;
const DB = process.env.DATABASE.replace('<password>',
  process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true, useUnifiedTopology: true,

}).then(()=>console.log('MongoDB connect'))
  .catch(err=>console.log(err));

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
