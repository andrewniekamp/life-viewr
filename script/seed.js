const db = require('../server/db')
const { User, Organism} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'test1@example.com', password: '123'}),
    User.create({email: 'test2@example.com', password: '123'})
  ])

  // Create with associations for quickness
  const organisms = await Promise.all([
    Organism.create({
      name: 'Tiger',
      kingdom: {
        name: 'Animalia',
        description: ''
      },
      phylum: {
        name: 'Chordata',
        description: ''
      },
      class: {
        name: 'Mammalia',
        description: ''
      },
      order: {
        name: 'Carnivora',
        description: ''
      },
      family: {
        name: 'Felidae',
        description: ''
      },
      genus: {
        name: 'Panthera',
        description: ''
      },
      species: {
        name: 'Panthera tigris',
        description: ''
      }
    }, { include: [{ all: true }]} ),
    Organism.create({
      name: 'Orangutan',
      kingdom: {
        name: 'Animalia',
        description: ''
      },
      phylum: {
        name: 'Chordata',
        description: ''
      },
      class: {
        name: 'Mammalia',
        description: ''
      },
      order: {
        name: 'Primates',
        description: ''
      },
      family: {
        name: 'Hominidae',
        description: ''
      },
      genus: {
        name: 'Pongo',
        description: ''
      },
      species: {
        name: 'Pongo pygmaeus',
        description: ''
      }
    }, { include: [{ all: true }]} )
  ])

  console.log(`seeded ${users.length} users, ${organisms.length} organisms`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
