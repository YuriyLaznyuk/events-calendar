const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,

  },
  author:{
    type:String,
    required:true
  },
  guest:{
    type:String,
  },
  date:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }

});
const Event=mongoose.model('Event',eventSchema);
module.exports=Event;