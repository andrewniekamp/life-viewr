const User = require('./user')
const Organism = require('./organism');

const Kingdom = require('./kingdom');
const Phylum = require('./phylum');
const Class = require('./class');
const Order = require('./order');
const Family = require('./family');
const Genus = require('./genus');
const Specie = require('./specie');

Organism.hasOne(Kingdom);
Organism.hasOne(Phylum);
Organism.hasOne(Class);
Organism.hasOne(Order);
Organism.hasOne(Family);
Organism.hasOne(Genus);
Organism.hasOne(Specie);

module.exports = {
  User,
  Organism,
  Kingdom,
  Phylum,
  Class,
  Order,
  Family,
  Genus,
  Specie
}
