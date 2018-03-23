// const mongoose= require('../../db/connection/connect');

// const propertySchema= mongoose.Schema({
//     title: String,
//     description: String,
//     address: String,
//     city: String,
//     state: String,
//     zipcode: String,
//     price: Number,
//     area: Number,
//     condition: String,
//     bedrooms: Number,
//     bathrooms: Number,
//     balcony: Number
// });

// const property= mongoose.model('Property', propertySchema);

// var obj= {
//     title: 'ras vihar',
//     description: '3bhk',
//     address: 'ip extension',
//     city: 'New Delhi',
//     state: 'Delhi',
//     zipcode: '110092',
//     price: 12345,
//     area: 234,
//     condition: 'new',
//     bedrooms: 3,
//     bathrooms: 2,
//     balcony: 2
// };

//  var instance= new property('Property', obj);
//  instance.save(function(err){
//      if(err){
//          console.log(err);
//      }
//  })

// module.exports.property= property;