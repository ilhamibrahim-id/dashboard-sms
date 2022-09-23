const Sequelize = require('sequelize');
const env = ['production','production2'];
const config = require('../config/config.json')[env[0]];
const config2 = require('../config/config.json')[env[1]];

const connect = new Sequelize(config.database,config.username,config.password,config);
const connect2 = new Sequelize(config2.database,config2.username,config2.password,config2);
module.exports = {
  connect,
  connect2,
}
