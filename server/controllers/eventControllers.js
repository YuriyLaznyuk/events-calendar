const Event = require('../models/eventModel');
const { validationResult } = require('express-validator');

exports.createEvent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'incorrect request'
      });
    }
    const newEvent = await Event.create(req.body);
    res.status(201).json({
      status: 'success',
      event: newEvent,
      message: 'event was created'
    });

  } catch (e) {
    res.status(404).json({
      status: 'fail',
      message: e.message
    });
  }
};

exports.getUserEvents = async (req, res) => {
  try {
    const userEvents = await Event.find(req.body);
    res.status(201).json({
      status: 'success',
      events: userEvents,
      message: 'events'
    });
  } catch (e) {
    res.status(404).json({
      status: 'fail',
      message: e.message
    });
  }
};

exports.deleteEvents = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.body.id);
    res.status(201).json({
      status: 'success',
      message: 'event delete'
    });

  } catch (e) {
    res.status(404).json({
      status: 'fail',
      message: e.message
    });
  }
};