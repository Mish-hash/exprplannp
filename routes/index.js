const express = require('express');

const router = express.Router();


router.post('/', function (req, res) {
  res.send('Драсте, хуй покрасте)))');
});

router.post('/status', function (req, res) {
  res.send('test status');
});

module.exports = router;