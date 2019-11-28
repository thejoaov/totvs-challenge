'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.float('price').notNullable()
      table.string('size', 10).notNullable()
      table.string('color').notNullable()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
