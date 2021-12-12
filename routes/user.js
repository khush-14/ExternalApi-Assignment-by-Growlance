const express = require('express');
const router = express();
const request = require('request');
const getCall = require('./datafetch');

router.get('/call',getCall.getRequest);
router.get('/', function(req, res, next) {
    request({
      uri: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
      
    }).pipe(res);
  });

module.exports = router;