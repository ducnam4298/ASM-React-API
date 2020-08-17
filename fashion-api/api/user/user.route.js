const express = require('express');
const router = express.Router();

const User = require('./users.model');
const authTitle = 'Management Fashion Man';
const customTitle = 'Fashion Man'

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    await User.find((error, users, res) => {
      if (!error) {
        res.status(200).json({
          users
        });
      } else throw error;
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;