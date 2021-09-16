const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      user: newUser
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message
    });
  }
};

exports.authUser = async (req, res) => {
  try {
    const auth = await User.find(req.body);
    if (auth.length){
    res.status(201).json({
      status: 'success',
      user: auth
    });
    }else {
      res.status(201).json({
        message:'incorrect email or password'
      })
    }

  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message
    });
  }
};