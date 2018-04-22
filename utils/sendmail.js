var nodemailer= require('nodemailer');
var saveProperty= require('../models/property/property');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'ghar.contact@gmail.com',
        // pass: 'ghar@1234'
        user: 'ghar.demo@gmail.com',
        pass: 'passwordbekarhai'
    }
});

var mailOptions = {
    from: 'ghar.demo@gmail.com',
    to: '',
    subject: 'Property Submitted',
    text: 'Following Property has been submitted \n'
};

function sendmail(req, callback){
    console.log(req);
    console.log(req.email);
    // console.log(req['first-name']);
    mailOptions.to= req.email;
    mailOptions.text=   'Following property has been submitted \n'+
                        'Firstname: '+req['first-name'] + ' Lastname: '+ req['last-name']+ '\n'+
                        'Telephone No.: '+ req.telno+ '\n'+
                        'Property Title: '+ req['property-title']+ '\n'+
                        'Property Description: '+ req['property-desc']+ '\n'+
                        'Address: '+ req.address + '\n'+
                        'City: '+ req.city+ '\n'+
                        'State: '+ req.state+ '\n'+
                        'ZIP Code: '+ req.zip+ '\n'+
                        'Price: '+ req.price+ '\n'+
                        'Area: '+ req.area+ 'sqft\n'+
                        'Bedrooms: '+ req.bedrooms+ '\n'+
                        'Bathrooms: '+ req.bathrooms+ '\n'+
                        'Balconies: '+ req.balcony+ '\n'

    console.log(mailOptions.text);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            callback({success: false, msg: error});
        } else {
            // saveProperty.saveProperty(req, function(result){
            //     if(result.success){
            //         console.log('Email sent: ' + info.response);
            //         callback({success: true, data: info.response});
            //     }else{
            //         callback({success: false, data: result.err});
            //     }
            // })
            callback({success: true, data: info.response});
            
        }
    });
}

module.exports.sendmail= sendmail;