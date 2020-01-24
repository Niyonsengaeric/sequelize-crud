const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('codegig', 'postgres', 'qwerty123', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases:false,

  pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
  },
});