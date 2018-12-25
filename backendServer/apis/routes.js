var express = require('express');
var router = express.Router();

let appOperations = require('../operations/app.operations');
let productOperations = require('../operations/products.operations');

router.get('/appInfo', function (req, res, next) {
    let appData = JSON.parse(appOperations.fetch());
    res.send(appData);
});

router.get('/allProducts', function (req, res, next) {
    let appData = JSON.parse(productOperations.fetch());
    res.send(appData);
});

router.post('/setTitle', function(req, res, next) {
    res.send(appOperations.setTitle(req.body.val))
})

module.exports = router;
