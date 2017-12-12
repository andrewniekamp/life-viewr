const Sequelize = require('sequelize')
const db = require('../db')

const Family = db.define('family', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Family;
