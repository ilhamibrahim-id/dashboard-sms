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
router.get('/totalreadfinishpdm',tablePDM.readtotalfinish);
router.get('/totalgoodandsatis',tablePDM.readgoodandsatis);
router.get('/totalunsatisunac',tablePDM.unsatisunac);
router.get('/totalasetoci1',tablePDM.assetoci1);
router.get('/totalasetoci2',tablePDM.assetoci2);
router.get('/totalasetfsb',tablePDM.assetfsb);
router.get('/totaloci1good',tablePDM.oci1good);
router.get('/totaloci1satis',tablePDM.oci1satis);
router.get('/totaloci1unsatis',tablePDM.oci1unsatis);
router.get('/totaloci1unacc',tablePDM.oci1unacc);
router.get('/totaloci2good',tablePDM.oci2good);
router.get('/totaloci2satis',tablePDM.oci2satis);
router.get('/totaloci2unsatis',tablePDM.oci2unsatis);
router.get('/totaloci2unacc',tablePDM.oci2unacc);
router.get('/totalfsbgood',tablePDM.FSBgood);
router.get('/totalfsbsatis',tablePDM.FSBsatis);
router.get('/totalfsbunsatis',tablePDM.FSBunsatis);
router.get('/totalfsbunacc',tablePDM.FSBunacc);
router.get('/totalfindingm',tableAM.readTotalFindingM);
router.get('/totalpendingexecutem',tableAM.readpendingexecutem);
router.get('/totalreadyexecutem',tableAM.readreadyexecutem);
router.get('/totalfinishexecutem',tableAM.readfinishexecutem);
router.get('/findingpending',tableAM.findingpending);
router.get('/levelam',tableAM.levelam);
module.exports = router;
