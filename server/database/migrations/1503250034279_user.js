'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.string('name', 254).notNullable()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table.boolean('google_login').notNullable()
      table.string('password', 60)
      table.string('google_token', 254)
      table.string('token')
      table.timestamp('token_created_at')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
