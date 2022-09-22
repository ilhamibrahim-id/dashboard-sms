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
