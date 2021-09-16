const app=require('./app');
require('dotenv').config({path:'./config.env'});
const PORT = process.env.PORT || 7070;



app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
