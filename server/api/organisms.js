const router = require('express').Router()
const { Organism } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Organism.findAll({include: [{ all: true }]})
    .then(organisms => res.json(organisms))
    .catch(next)
})

router.post('/', (req, res, next) => {
  // Likely preferable to verify data before creating
  let data = req.body;
  Organism.create({
    name: data.name,
    imageURL: data.imageURL,
    kingdom: { name: data.kingdom },
    phylum: { name: data.phylum },
    class: { name: data.class },
    order: { name: data.order },
    family: { name: data.family },
    genus: { name: data.genus },
    species: { name: data.species }
  }, {include: [{ all: true }]})
    .then(organism => res.json(organism))
    .catch(next)
})
