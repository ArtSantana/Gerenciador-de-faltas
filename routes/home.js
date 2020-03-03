const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('home page');
})

module.exports = router