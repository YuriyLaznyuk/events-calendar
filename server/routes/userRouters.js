const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.route('/api/user')
  .post(userController.createUser)
  .put(userController.authUser);

// router.route('/api/auth')
//   .post(userController.authUser);


module.exports = router;