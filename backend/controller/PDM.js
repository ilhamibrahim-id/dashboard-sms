const config = require('../config/connection.js');
const { Sequelize } = require('../models/index.js');

exports.readtotalasset = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device;", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readtotalassetoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readtotalassetoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readtotalassetfsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readtotalfinish = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t WHERE t.value IS NOT NULL;", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readtotalfinishoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.value IS NOT NULL AND a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readtotalfinishoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.value IS NOT NULL AND a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readtotalfinishfsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.value IS NOT NULL AND a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readgoodandsatis = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t WHERE (t.`status` = 'Good' OR t.`status` = 'Satisfactory');", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readgoodandsatisoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' AND a.name_area = 'OCI1');", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readgoodandsatisoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' AND a.name_area = 'OCI2');", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.readgoodandsatisfsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) as total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' AND a.name_area = 'FSB');", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.unsatisunac = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t WHERE (t.`status` = 'Unatisfactory' OR t.`status` = 'Unacceptable');", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.unsatisunacoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND (t.`status` = 'Unatisfactory' OR t.`status` = 'Unacceptable') AND a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.unsatisunacoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND (t.`status` = 'Unatisfactory' OR t.`status` = 'Unacceptable') AND a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.unsatisunacfsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN mst_set_test st ON t.id_set_test = st.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE t.do_date BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND (t.`status` = 'Unatisfactory' OR t.`status` = 'Unacceptable') AND a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.assetoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.assetoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.assetfsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.assetfsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci1good = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Good' AND a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci1satis = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Satisfactory' AND a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci1unsatis = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Unatisfactory' AND a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci1unacc = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Unacceptable' AND a.name_area = 'OCI1';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci2good = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Good' AND a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci2satis = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Satisfactory' AND a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci2unsatis = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Unatisfactory' AND a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.oci2unacc = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Unacceptable' AND a.name_area = 'OCI2';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.FSBgood = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Good' AND a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.FSBsatis = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Satisfactory' AND a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.FSBunsatis = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Unatisfactory' AND a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.FSBunacc = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT COUNT(*) AS total FROM tr_test t JOIN view_set_test st ON st.id_set_test = t.id_set_test JOIN view_area a ON a.id_area = st.id_area WHERE t.`status` = 'Unacceptable' AND a.name_area = 'FSB';", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.finishtodaylistoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT d.device_name,te.test_name,te.name_point_test,t.do_date,t.plan_date,t.PIC,t.`status` FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1' AND t.do_date BETWEEN curdate() - interval 1 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.finishtodaylistoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT d.device_name,te.test_name,te.name_point_test,t.do_date,t.plan_date,t.PIC,t.`status` FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2' AND t.do_date BETWEEN curdate() - interval 1 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.finishtodaylistfsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT d.device_name,te.test_name,te.name_point_test,t.do_date,t.plan_date,t.PIC,t.`status` FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB' AND t.do_date BETWEEN curdate() - interval 1 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.vibrationlineoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1' AND te.kategori = 'vibration' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.vibrationlineoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2' AND te.kategori = 'vibration' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.vibrationlinefsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB' AND te.kategori = 'vibration' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.amperelineoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1' AND te.kategori = 'ampere' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.amperelineoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2' AND te.kategori = 'ampere' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.amperelinefsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB' AND te.kategori = 'ampere' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.temperaturelineoci1 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1' AND te.kategori = 'temperature' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.temperaturelineoci2 = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2' AND te.kategori = 'temperature' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
exports.temperaturelinefsb = async (req, res) => {
  try {
    const get = await config.connect2.query("SELECT t.do_date,t.value FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_test te ON te.id_test = st.id_test JOIN mst_device d ON d.id_device = st.id_device JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB' AND te.kategori = 'temperature' AND t.do_date BETWEEN curdate() - interval 30 DAY AND CURDATE();", {
      type: Sequelize.QueryTypes.SELECT
    });
    return res.status(200).json({
      get
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
