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
