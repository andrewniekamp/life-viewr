const Sequelize = require('sequelize')
const db = require('../db')

const Genus = db.define('genus', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Genus;
