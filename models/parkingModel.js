var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var parkingSchema = new Schema({
	"no_days" : Number,
	"homeAddress": String
});

module.exports = mongoose.model('parking', parkingSchema);