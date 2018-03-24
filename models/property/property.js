const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/ghAR');
// const mongoose= require('../../db/connection/connect');

const propertySchema= mongoose.Schema({
    title: String,
    description: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    price: Number,
    area: Number,
    condition: String,
    bedrooms: Number,
    bathrooms: Number,
    balcony: Number
});

const property= mongoose.model('Property', propertySchema);

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

// // function saveProperty(){
//     var instance= new property(obj);
//     instance.save(function(err){
//         if(err){
//             console.log(err);
//         }
//     })
// // }

    function saveProperty(req, callback){
        var propertyData= {
            title: req['property-title'],
            description:req['property-desc'],
            address: req.address,
            city: req.city,
            state: req.state,
            zipcode: req.zip,
            price: req.price,
            area: req.area,
            // condition: 'new',
            bedrooms: req.bedrooms,
            bathrooms: req.bathrooms,
            balcony: req.balcony
        }

        modelObj= new property(propertyData);
        modelObj.save((err, data)=>{
            if(err){
                callback({success: false, err: err});
            }
            else{
                callback({
                    success: true,
                    data: data
                })
            }
        }) 


    }


module.exports.saveProperty= saveProperty;