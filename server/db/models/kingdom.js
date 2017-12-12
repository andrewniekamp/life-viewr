const Sequelize = require('sequelize')
const db = require('../db')

const Kingdom = db.define('kingdom', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Kingdom;
