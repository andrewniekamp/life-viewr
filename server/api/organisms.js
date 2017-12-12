const router = require('express').Router()
const { Organism } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Organism.findAll({include: [{ all: true }]})
    .then(organisms => res.json(organisms))
    .catch(next)
})
