var express = require('express');
var router = express.Router();
const tableAM = require("../controller/AM");
const tablePDM = require("../controller/PDM");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/totalf',tableAM.read);
router.get('/totalreadpendingexecute',tableAM.readpendingexecute);
router.get('/totalreadreadyexecute', tableAM.readreadyexecute);
router.get('/totalreadfinishexecute', tableAM.readfinishexecute);
router.get('/totalpdmasset', tablePDM.readtotalasset);
module.exports = router;
