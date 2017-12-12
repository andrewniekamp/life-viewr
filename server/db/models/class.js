const Sequelize = require('sequelize')
const db = require('../db')

const Class = db.define('class', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Class;
