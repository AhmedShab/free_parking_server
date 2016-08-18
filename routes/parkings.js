var express = require('express');
var router = express.Router();
var passport = require('passport');
var parkingController = require('../controllers/parkingController.js');
var seedParking = require('../seeds/createSeedParking');

/*
 * GET
 */

 router.post('/', passport.authenticate('local-signup', {
     successRedirect: '/parkings',
     failureRedirect: '/test'
   })
 );

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
