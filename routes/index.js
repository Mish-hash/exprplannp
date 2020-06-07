const express = require('express');
const router = express.Router();

const {statusDocument} = require('../controllers/statusDocController');


router.post('/', function (req, res) {
  res.send('Драсте, хуй покрасте)))');
});

router.post('/status', statusDocument);

module.exports = router;