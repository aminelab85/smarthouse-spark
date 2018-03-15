var router = require('express').Router();

router.get('/on', function(req, res) {
    res.json(
        {"data":"dcsdc"}
    ).end();
});

router.get('/off', function(req, res) {
    res.json(
        {"data":"dcsdc"}
    ).end();
});

router.get('/:zoneid/:id/on', function(req, res) {
    var zoneid = req.params.zoneid;
    var id = req.params.id;
    res.json(
        {"data":"dcsdc"}
    ).end();
});

router.get('/:zoneid/:id/off', function(req, res) {
    var zoneid = req.params.zoneid;
    var id = req.params.id;
    res.json(
        {"data":"dcsdc"}
    ).end();
});

module.exports = router;