var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log('webhook called!');
    res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    console.log('webhook called!');
    res.send('respond with a resource');
});

module.exports = router;