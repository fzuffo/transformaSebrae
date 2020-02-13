'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultingSchema extends Schema {
  up() {
    this.create('consultings', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
      table
        .integer('consultant_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.varchar('status')
      table.varchar('comments')
      table.timestamps()
    })
  }

  down() {
    this.drop('consultings')
  }
}

module.exports = ConsultingSchema
