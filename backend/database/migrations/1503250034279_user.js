'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table.string('password', 60).notNullable()
      table.string('name', 254)
      table.boolean('consultant').defaultTo(false)
      table.string('local')
      table.string('document')
      table.string('phone')
      table
        .integer('avatar_id')
        .unsigned()
        .references('id')
        .inTable('files')
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
