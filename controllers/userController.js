var userModel = require('../models/userModel.js');

/**
* parkingController.js
*
* @description :: Server-side logic for managing users.
*/
module.exports = {

  /**
  * parkingController.list()
  */
  list: function(req, res) {
    userModel.find(function(err, users){
      if(err) {
        return res.json(500, {
          message: 'Error getting parking.'
        });
      }
      return res.json(users);
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
    userModel.findOne({_id: id}, function(err, parking){
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

    // console.log(data);

    // console.log('before saving');
    var parking = new userModel({      emailAddress: data.emailAddress,      date : data.date,
      from : data.from,
      to : data.to,
      no_days : data.no_days,
      homeAddress: data.homeAddress    });

    parking.save(function(err, parking){
      // console.log('saving...');
      if(err) {
        return res.status(500).json({
          message: 'Error saving parking',
          error: err
        });
      }
      return res.status(200).json({
        message: 'saved'
      });
    });
  },

  /**
  * parkingController.update()
  */
  update: function(req, res) {
    var id = req.params.id;
    userModel.findOne({_id: id}, function(err, parking){
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
    userModel.findByIdAndRemove(id, function(err, parking){
      if(err) {
        return res.json(500, {
          message: 'Error getting parking.'
        });
      }
      return res.json(parking);
    });
  }
};
