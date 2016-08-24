var express = require('express');
var router = express.Router();
var passport = require('passport');
var parkingController = require('../controllers/parkingController.js');
var seedParking = require('../seeds/createSeedParking');
var auth = require('../controllers/auth');
// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');

/*
 * GET
 */

router.get('/', function(req, res) {
    res.json({
      message: "you have not successfuly logged in"
    });
});
router.get('/parkings', function(req, res) {
  parkingController.list(req, res);
});

router.get('/test', function(req, res) {
    parkingController.test(req, res);
});

router.get('/geoCoder', function(req, res) {
    parkingController.testGeocoder(req, res);
});

router.get('/seedParking', function(req, res) {
    seedParking.runSeed(req, res);
});

/*
 * GET
 */
// router.get('/:id', function(req, res) {
//     parkingController.show(req, res);
// });

/*
 * POST
 */
router.post('/parkings', function(req, res) {
    parkingController.create(req, res);
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/token',
    failureRedirect: '/'
  })
);

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/token',
    failureRedirect: '/'
  })
);

router.get('/token',auth.isLoggedIn, function(req, res) {
  var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

    res.status(200).json({
      success: true,
      token: token
    });
});
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


/*
 * PUT
 */
router.put('/:id', function(req, res) {
    parkingController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    parkingController.remove(req, res);
});

module.exports = router;
