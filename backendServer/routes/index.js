var express = require('express');
var router = express.Router();
var path = require('path');
let appOperations = require('../operations/app.operations');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../App/dist/App/index.html'))
  // res.render('index', { title: JSON.parse(appOperations.fetch()).title });
});

module.exports = router;
