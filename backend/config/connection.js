const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const connect = new Sequelize(config.database,config.username,config.password,config);

module.exports = {
  connect,
}
