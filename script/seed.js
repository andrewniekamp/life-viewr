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
      imageURL: '/images/tiger.jpg',
      description: 'The tiger (Panthera tigris) is the largest cat species, most recognizable for their pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, leopard, jaguar, and snow leopard. Tigers are apex predators, primarily preying on ungulates such as deer and bovids. They are territorial and generally solitary but social animals, often requiring large contiguous areas of habitat that support their prey requirements. This, coupled with the fact that they are indigenous to some of the more densely populated places on Earth, has caused significant conflicts with humans. -Wikipedia (https://en.wikipedia.org/wiki/Tiger)',
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
      description: 'The orangutans (also spelled orang-utan, orangutang, or orang-utang)[1] are three extant species of great apes native to Indonesia and Malaysia. Orangutans are currently only found in the rainforests of Borneo and Sumatra. Classified in the genus Pongo, orangutans were originally considered to be one species. From 1996, they were divided into two species: the Bornean orangutan (P. pygmaeus, with three subspecies) and the Sumatran orangutan (P. abelii). In November 2017 it was reported that a third species had been identified, the Tapanuli orangutan (P. tapanuliensis). - Wikipedia (https://en.wikipedia.org/wiki/Orangutan)',
      imageURL: '/images/orangutan.jpg',
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
