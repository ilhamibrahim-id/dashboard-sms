const config = require('../config/connection.js');
const { Sequelize } = require('../models/index.js');

exports.read = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 365 DAY )AND CURRENT_TIMESTAMP;", {
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
exports.readTotalFindingM = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.id_area = 1;", {
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
exports.readTotalFindingMoci2 = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.id_area = 2;", {
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
exports.readTotalFindingMfsb = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.id_area = 3;", {
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
exports.readpendingexecute = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 365 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise';", {
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
exports.readpendingexecutem = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise' AND t.id_area = 1;", {
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
exports.readpendingexecutemoci2 = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise' AND t.id_area = 2;", {
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
exports.readpendingexecutemfsb = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise' AND t.id_area = 3;", {
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
exports.readreadyexecute = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 365 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved';", {
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
exports.readreadyexecutem = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved' AND t.id_area = 1;", {
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
exports.readreadyexecutemoci2 = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved' AND t.id_area = 2;", {
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
exports.readreadyexecutemfsb = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved' AND t.id_area = 3;", {
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
exports.readfinishexecute = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 365 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Done';", {
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
exports.readfinishexecutem = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Done' AND t.id_area = 1;", {
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
exports.readfinishexecutemoci2 = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Done' AND t.id_area = 2;", {
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
exports.readfinishexecutemfsb = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.`status` = 'Done' AND t.id_area = 3;", {
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
exports.findingpending = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT t.finding,l.`level`,t.func_loc,a.area FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` JOIN mst_area a ON a.id = t.id_area;", {
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
exports.levelam = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT l.`level` FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.id_area = 1;", {
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
exports.findingpendingoci2 = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT t.finding,l.`level`,t.func_loc,a.area FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` JOIN mst_area a ON a.id = t.id_area;", {
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
exports.levelamoci2 = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT l.`level` FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.id_area = 2;", {
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
exports.findingpendingfsb = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT t.finding,l.`level`,t.func_loc,a.area FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` JOIN mst_area a ON a.id = t.id_area;", {
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
exports.levelamfsb = async (req, res) => {
  try {
    const get = await config.connect.query("SELECT l.`level` FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` WHERE t.last_update BETWEEN DATE_SUB(CURRENT_TIMESTAMP,INTERVAL 30 DAY )AND CURRENT_TIMESTAMP AND t.id_area = 3;", {
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
