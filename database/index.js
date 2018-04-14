var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to Database!')
});

  var contactSchema = new mongoose.Schema({
    name:  String,
    age: Number,
    phone:   Number,
    email: String,
    facebook: String,
    twitter: String,
    googleplus: String
    
  });

var Contact=mongoose.model('contact',contactSchema);

var makeContact=function(data){

	var contact=new Contact({
		name:data.name,
		age:data.age,
		phone:data.phone,
		email:data.email,
		facebook:data.facebook,
		twitter:data.facebook,
		googleplus:data.googleplus
	})

	contact.save(function(error,data){
		if(error){
			console.log(error)
		}else{
			console.log('saved in db!')
		}
	})
}


module.exports.makeContact=makeContact;
module.exports.Contact=Contact;
