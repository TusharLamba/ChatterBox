var express = require("express");
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/UserDB");
//var Entity = mongoose.model('Entity', {name: String});

/*var entity = new Entity({name:"My Second App"});
 entity.save(function(err) {
 if(err) {
 console.log("failed");
 throw err;
 }
 else {
 console.log("saved");
 }
 });*/
//set static folder
app.use(express.static(__dirname + 'public'));

//HTML views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);
app.use('/users', users);

/*app.get('/', function(req, res) {
 console.log("In method home");
 Entity.find(function(err, entity) {
 res.send(entity);
 });
 });*/

var server = app.listen(3000, function () {
    console.log('Server started on port 3000');
});
