var express=require('express');
var app=express();
let bodyParser = require('body-parser');
let db=require('./database/index.js')

app.use(express.static(__dirname + '/./client/dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())


app.get('/',function(req,res){
	
	res.end()

})

app.post('/',function(req,res){
	db.makeContact(req.body)
	res.end()
	
})


app.get('/contacts',function(req,res){
	db.Contact.find(function (err, contacts) {
  if (err){
  	return console.error(err);
  } 
  console.log(contacts);
	res.send(contacts)
})
})

app.put('/contacts', function (req, res) {
    
    db.Contact.remove({}, function(err,contacts){
    	if(err){
    		return console.error(err)
    	}else{
    		console.log('Deleted all contacts!')
    	}
    })

    res.end()

}); 



app.listen(5000,function(){
	console.log('listening on port 5000')
})