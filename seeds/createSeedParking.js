var parkingModel = require('../models/parkingModel.js');

function runSeed(req, res) {
  var parking = new parkingModel({
    emailAddress: "ahmed.vuw@gmail.com",
    date : 'Auguest 8 2016',
    from : '2 pm',
    to : '5 pm',
    no_days : 1,
    homeAddress: '162B Raroa Rd, Aro Valley, Wellington 6012'
  });

  parking.save(function(err, parking){
    if(err) {
      return res.json(500, {
        message: 'Error saving parking',
        error: err
      });
    }
    return res.json({
      message: 'saved',
      result: parking
    });
  });
}


module.exports = {
  runSeed
};
