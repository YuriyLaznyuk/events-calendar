const express=require('express');
const router=express.Router();
const validator=require('../middleware/validatorMiddleware');
const eventControllers=require('../controllers/eventControllers')
router.route('/api/event')
  .post(validator.event,eventControllers.createEvent)
  .put(eventControllers.getUserEvents);


module.exports=router;