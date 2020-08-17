const express = require('express');
const multer = require('multer');
const router = express.Router();
const Product = require('./products.model');
const Category = require('../category/categories.model');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find();
    await Product.find((error, products) => {
      if (!error) {
        res.status(200).json({
          products,
          categories
        });
      } else throw error;
    }).sort({ 'created_at': -1 });
  } catch (error) {
    next(error);
  }
});

router.get('/detail/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    await Product.findOne({ _id }, (error, product) => {
      if (!error) {
        res.status(200).json({
          product
        });
      } else throw error;
    });
  } catch (error) {
    next(error);
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false, new erroror('Image uploaded is not of type jpg/jpeg or png'));
  }
};

const upload = multer({ storage, fileFilter });

router.post('/store', upload.array('image', 12), async (req, res, next) => {
  const image = [];
  const details = [];
  const state = 'active';
  const {
    name,
    category,
    color,
    size,
    quantity,
    gender,
    price,
    description
  } = req.body;

  for (const path of req.files) {
    image.push('/uploads/' + path.originalname);
  }

  if (Array.isArray(color, size, quantity)) {
    for (let i = 0; i < color.length, i < size.length, i < quantity.length; i++) {
      details.push({
        color: color[i].toUpperCase(),
        size: size[i].toUpperCase(),
        quantity: quantity[i],
      });
    }
  } else {
    details.push({
      color: color.toUpperCase(),
      size: size.toUpperCase(),
      quantity: quantity,
    });
  }
  try {
    await Product.findOne({ name }, (error, product) => {
      if (!error && product.length === 0) {
        Product.create({
          name,
          category,
          details,
          gender,
          price,
          description,
          image,
          state
        });
      } else throw error;
    });
  } catch (error) {
    next(error);
  }
});

router.get('/edit/:id', async (req, res, next) => {
  try {
    await Product.findOne(req.params.id, (error, product) => {
      if (!error) {
        res.status(200).json({
          product: product
        });
      } else throw error;
    });
  } catch (error) {
    next(error);
  }
});

router.post('/active/:id', async (req, res, next) => {
  const state = 'active';
  const _id = req.params.id;
  try {
    await Product.findOneAndUpdate(
      { _id },
      {
        $set: {
          state,
          updated_at: Date.now()
        }
      },
      (error, product) => {
        if (!error) {
          res.status(200).json({

            product
          });
        } else throw error;
      });
  } catch (error) {
    next(error);
  }
});

router.post('/hidden/:id', async (req, res, next) => {
  const state = 'hidden';
  const _id = req.params.id;
  try {
    await Product.findOneAndUpdate(
      { _id },
      {
        $set: {
          state,
          updated_at: Date.now()
        }
      },
      (error, product) => {
        if (!error) {
          res.status(200).json({

            product
          });
        } else throw error;
      });
  } catch (error) {
    next(error);
  }
});

router.post('/delete/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    await Product.findByIdAndRemove(
      { _id },
      (error, product) => {
        if (!error) {
          res.status(200).json({

            product
          });
        } else throw error;
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
