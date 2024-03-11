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
// @desk    Create A Post 
// @access  Public
router.post('/', (req, res) => {
  const newmarvel = new marvel({
    name: req.body.name
  });

  newmarvel.save().then(marvels => res.json(marvels));
});

module.exports = router; 