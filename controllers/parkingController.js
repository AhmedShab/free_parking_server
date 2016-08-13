var parkingModel = require('../models/parkingModel.js');

/**
* parkingController.js
*
* @description :: Server-side logic for managing parkings.
*/
module.exports = {

  /**
  * parkingController.list()
  */
  list: function(req, res) {
    parkingModel.find(function(err, parkings){
      if(err) {
        return res.json(500, {
          message: 'Error getting parking.'
        });
      }
      console.log(parkings);
      return res.json(parkings);
    });
  },

  test: function(req, res) {

    var result = [
      {
        date: "Auguest 8 2016",
        from: "2 pm",
        to: "5 pm",
        no_days: "1",
        homeAddress: "162B Raroa Rd, Aro Valley, Wellington 6012"
      }
    ];
    return res.json(result);
  },

  /**
  * parkingController.show()
  */
  show: function(req, res) {
    var id = req.params.id;
    parkingModel.findOne({_id: id}, function(err, parking){
      if(err) {
        return res.json(500, {
          message: 'Error getting parking.'
        });
      }
      if(!parking) {
        return res.json(404, {
          message: 'No such parking'
        });
      }
      return res.json(parking);
    });
  },

  /**
  * parkingController.create()
  */
  create: function(req, res) {
    var data = req.body;

    console.log(data);
    var parking = new parkingModel({      emailAddress: data.emailAddress,      date : data.date,
      from : data.from,
      to : data.to,
      no_days : data.no_days,
      homeAddress: data.address    });

    parking.save(function(err, parking){
      if(err) {
        return res.json(500, {
          message: 'Error saving parking',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: parking._id
      });
    });
  },

  /**
  * parkingController.update()
  */
  update: function(req, res) {
    var id = req.params.id;
    parkingModel.findOne({_id: id}, function(err, parking){
      if(err) {
        return res.json(500, {
          message: 'Error saving parking',
          error: err
        });
      }
      if(!parking) {
        return res.json(404, {
          message: 'No such parking'
        });
      }

      parking.location =  req.body.location ? req.body.location : parking.location;      parking.time =  req.body.time ? req.body.time : parking.time;
      parking.save(function(err, parking){
        if(err) {
          return res.json(500, {
            message: 'Error getting parking.'
          });
        }
        if(!parking) {
          return res.json(404, {
            message: 'No such parking'
          });
        }
        return res.json(parking);
      });
    });
  },

  /**
  * parkingController.remove()
  */
  remove: function(req, res) {
    var id = req.params.id;
    parkingModel.findByIdAndRemove(id, function(err, parking){
      if(err) {
        return res.json(500, {
          message: 'Error getting parking.'
        });
      }
      return res.json(parking);
    });
  }
};
