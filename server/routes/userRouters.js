const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const validator=require('../middleware/validatorMiddleware');
const userAuthMiddleware=require('../middleware/userAuthMiddleware');
router.route('/api/user')
  .post(validator.user, userController.createUser);

router.route('/api/login')
  .post(userController.loginUser);

router.route('/api/auth')
  .get(userAuthMiddleware,userController.authUser);

module.exports = router;