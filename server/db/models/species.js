const Sequelize = require('sequelize')
const db = require('../db')

const Species = db.define('species', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Species;
