const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', getHome);

/* Route handlers */
function getHome(req, res) {
    res
      .status(200)
      .type('text/plain')
      .send('API available');
}

module.exports = router;
