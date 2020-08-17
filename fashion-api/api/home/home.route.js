const express = require('express');
const router = express.Router();
const Product = require('../product/products.model');

router.get('/', async (req, res, next) => {
  try {
    await Product.find((error, products) => {
      if (!error) {
        res.status(200).json({
          products
        });
      } else throw error;
    }).limit(12);
  } catch (error) {
    next(error);
  }
});

module.exports = router;