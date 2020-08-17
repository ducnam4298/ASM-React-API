const express = require('express');
const router = express.Router();
const Category = require('./categories.model');
const authTitle = 'Management Fashion Man';
const customTitle = 'Fashion Man';


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    await Category.find((error, categories) => {
      if (!error) {
        res.status(200).json({
          categories
        });
      } else throw error;
    });
  } catch (error) {
    next(error);
  }
});

router.post('/store', async (req, res, next) => {
  const { name } = req.body;
  const state = 'active';
  try {
    await Category.findOne({ name }, (error, category) => {
      if (!category && !error) {
        Category.create({
          name: name.toUpperCase(),
          state,
          created_at: Date.now(),
          updated_at: Date.now()
        });
      } else throw error;
    });
  } catch (error) {
    next(error);
  }
});

router.get('/edit/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    await Category.findOne({ _id }, (error, category) => {
      if (category && !error) {
        res.status(200).json({
          category
        });
      } else throw error;
    });
  } catch (error) {
    next(error);
  }
});

router.post('/update/:id', async (req, res, next) => {
  const { name } = req.body;
  const _id = req.params.id;
  try {
    await Category.findOneAndUpdate(
      { _id },
      {
        $set: {
          name: name.toUpperCase(),
          updated_at: Date.now()
        }
      },
      (error, category) => {
        if (!error) {
          res.status(200).json({
            category
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
    await Category.findOneAndUpdate(
      { _id },
      {
        $set: {
          state,
          updated_at: Date.now()
        }
      },
      (error, category) => {
        if (!error) {
          res.status(200).json({
            category
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
    await Category.findOneAndUpdate(
      { _id },
      {
        $set: {
          state,
          updated_at: Date.now()
        }
      },
      (error, category) => {
        if (!error) {
          res.status(200).json({
            category
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
    await Category.findOneAndRemove(
      { _id },
      (error, category) => {
        if (!error) {
          res.status(200).json({
            category
          });
        } else throw error;
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;