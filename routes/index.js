var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/test/', function(req, res) {
  res.render('test', { foo: 'Bar', baz: [123,456,789] });
});

router.get('/api', function(req, res) {
    var options = {
        url: 'https://api.github.com/repos/blockify/blockify/releases',
        headers: {
            'User-Agent': 'request'
        }
    }
    request.get(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render('github', { body: JSON.parse(body) });
        } else {
            console.log('========= Error');
            console.log(response.body);
            console.log(error);
            console.log('========= Error');
        }
    });
});

module.exports = router;
