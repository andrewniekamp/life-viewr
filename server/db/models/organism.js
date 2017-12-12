const Sequelize = require('sequelize')
const db = require('../db')

const Organism = db.define('organism', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  imageURL: Sequelize.STRING
})

module.exports = Organism;
