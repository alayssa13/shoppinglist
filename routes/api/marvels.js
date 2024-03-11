const express = require('express');
const router = express.Router();

// marvels Model 
const marvel = require('../../models/marvel');

// @route   GET api/marvel
// @desk    get All marvel
// @access  Public
router.get('/', (req, res) => {

    marvel.find()
    .sort({ date: -1 })
    .then(marvels => res.json(marvels))
});

// @route   POST api/marvel
// @desk    Create An Item 
// @access  Public
router.post('/', (req, res) => {
  const newmarvel = new marvel({
    name: req.body.name
  });

  newmarvel.save().then(marvels => res.json(marvels));
});

// @route   DELETE api/marvel/:id
// @desk    Delete A Item 
// @access  Public
router.delete('/:id', (req, res) => {
  marvel.findById(req.params.id)
      .then(Marvel => {
          if (!Marvel) {
              return res.status(404).json({ success: false, message: 'Marvel not found' });
          }
          Marvel.deleteOne()
              .then(() => res.json({ success: true }))
              .catch(err => res.status(500).json({ success: false, error: err.message }));
      })
      .catch(err => res.status(500).json({ success: false, error: err.message }));
});

module.exports = router; 