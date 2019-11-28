'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async faker => {
  const google_login = faker.bool()

  const google_token = google_login ? await Hash.make(faker.password()) : null
  const password = !google_login ? await Hash.make(faker.password()) : null

  return {
    name: faker.name(),
    email: faker.email(),
    google_login,
    google_token,
    password,
  }
})

Factory.blueprint('App/Models/Product', async faker => {
  return {
    name: faker.sentence({ words: 3 }),
    description: faker.sentence(),
    price: faker.floating({ min: 200, max: 5000 }),
    size: faker.character({ pool: 'XGMP' }),
    color: faker.word(),
  }
})
