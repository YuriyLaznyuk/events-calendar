const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/userModel');

exports.createUser = async (req, res) => {

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'incorrect request'
      });
    }

    const { email, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({
        message: `user with this email:${email} exists`
      });
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const newUser = await User.create({ ...req.body, password: hashPassword });
    res.status(201).json({
      status: 'success',
      user: newUser,
      message: 'User was created'
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: 'User is not found'
      });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({
        message: 'Invalid password'
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY,
      { expiresIn: 180 });
    res.status(201).json({
      message:'success',
      token,
      user: {
        name: user.name,
        email: user.email
      }
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
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY,
      { expiresIn: 180 });
    res.status(201).json({
      token,
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message
    });
  }
};