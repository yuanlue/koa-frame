const Sequelize = require('sequelize');
const sequelize = require('../config/mysql_config')
const User = sequelize.define('users', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});
sequelize.sync({ force: false }); 
module.exports = User