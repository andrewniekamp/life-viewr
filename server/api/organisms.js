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
    kingdom: { name: data.kingdom.name },
    phylum: { name: data.phylum.name },
    class: { name: data.class.name },
    order: { name: data.order.name },
    family: { name: data.family.name },
    genus: { name: data.genus.name },
    species: { name: data.species.name }
  }, {include: [{ all: true }]})
    .then(organism => res.json(organism))
    .catch(next)
})
