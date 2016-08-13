var express = require('express');
var router = express.Router();
var parkingController = require('../controllers/parkingController.js');
var seed = require('../seeds/createSeedParking');

/*
 * GET
 */
router.get('/parkings', function(req, res) {
    parkingController.list(req, res);
});

router.get('/test', function(req, res) {
    parkingController.test(req, res);
});

router.get('/seed', function(req, res) {
    seed.runSeed(req, res);
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
