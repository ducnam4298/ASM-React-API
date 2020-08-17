const express = require('express');
const router = express.Router();

const Order = require('./orders.model');
const authTitle = 'Management Fashion Man';
const customTitle = 'Fashion Man';

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.status(200).json({
    title: authTitle,

  });
});

router.get('/order-detail', async (req, res, next) => {
  res.status(200).json({
    title: authTitle,

  });
});

router.get('/shopping-cart', async (req, res, next) => {
  await Order.findOne({ status: 'Đang mua hàng' }, (error, order) => {
    if (!error) {
      res.status(200).json({
        title: customTitle,
        order
      });
    } else throw error;
  });
});


module.exports = router;
