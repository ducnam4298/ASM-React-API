const express = require('express');
const router = express.Router();

// const User = require('../models/user.model');
const authTitle = 'Management Fashion Man';
const customTitle = 'Fashion Man'

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).json({});
});

module.exports = router;