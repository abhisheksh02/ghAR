var express = require('express');
var router = express.Router();
// const mongoose= require('../db/connection/connect');
const property= require('../models/property/property');

var obj= {
    title: 'ras vihar',
    description: '3bhk',
    address: 'ip extension',
    city: 'New Delhi',
    state: 'Delhi',
    zipcode: '110092',
    price: 12345,
    area: 234,
    condition: 'new',
    bedrooms: 3,
    bathrooms: 2,
    balcony: 2
};

// var instance= new property('Property', obj);
// instance.save(function(err){
//     if(err){
//         console.log(err);
//     }
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/front-end/index.html');
});

module.exports = router;
