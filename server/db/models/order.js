const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Order;
