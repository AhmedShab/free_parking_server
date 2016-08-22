var express = require('express');
var router = express.Router();
var passport = require('passport');
var parkingController = require('../controllers/parkingController.js');
var seedParking = require('../seeds/createSeedParking');
var auth = require('../controllers/auth');

/*
 * GET
 */

router.get('/', auth.isLoggedIn, function(req, res) {
    res.json({
      message: "you have successfuly logged in"
    });
});
router.get('/parkings', function(req, res) {
    parkingController.list(req, res);
});

router.get('/test', function(req, res) {
    parkingController.test(req, res);
});

router.get('/seedParking', function(req, res) {
    seedParking.runSeed(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    parkingController.show(req, res);
});

/*
 * POST
 */
router.post('/parkings', function(req, res) {
    parkingController.create(req, res);
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/test'
  })
);

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/test'
  })
);

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
