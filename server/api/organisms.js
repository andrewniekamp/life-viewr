const router = require('express').Router()
const { Organism } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Organism.findAll()
    .then(organisms => res.json(organisms))
    .catch(next)
})
