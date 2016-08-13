var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var parkingSchema = new Schema({	"emailAddress": String,	"date" : String,	"from" : String,	"to" : String,
	"no_days" : Number,
	"homeAddress": String
});

module.exports = mongoose.model('parking', parkingSchema);
