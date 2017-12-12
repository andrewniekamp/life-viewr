const Sequelize = require('sequelize')
const db = require('../db')

const Specie = db.define('specie', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Specie;
