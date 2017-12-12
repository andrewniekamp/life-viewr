const Sequelize = require('sequelize')
const db = require('../db')

const Phylum = db.define('phylum', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Phylum;
