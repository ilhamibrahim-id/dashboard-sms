var express = require('express');
var router = express.Router();
const tableAM = require("../controller/AM");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/totalf',tableAM.read);
router.get('/totalreadpendingexecute',tableAM.readpendingexecute);
router.get('/totalreadreadyexecute', tableAM.readreadyexecute);
router.get('/totalreadfinishexecute', tableAM.readfinishexecute);
module.exports = router;
