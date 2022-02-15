const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/players', (req, res, next) => {
  // console.log("hit")
  // Player
  //   .find({}, 'name')
  //   .then((data) => res.json(data))
  //   .catch(next);
  res.send('hit');
});

router.post('/players', (req, res, next) => {
  if (req.body.name) {
    Player.create(req.body)
      .then((data) => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});


module.exports = router;