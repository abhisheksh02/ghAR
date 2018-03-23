var express = require('express');
var router = express.Router();
var sendmail= require('../utils/sendmail');

router.post('/', function (req, res) {
    console.log('hello submit Property');
     req= req.body;
     sendmail.sendmail(req, function(result){
        //  res.json({result});
        res.sendfile('./public/front-end/submit-property.html');
     })
  });

module.exports= router;