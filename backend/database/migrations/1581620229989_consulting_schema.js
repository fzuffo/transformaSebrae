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
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('consultant_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .varchar('status', 100)
        .notNullable()
        .defaultsTo('Aguardando')
      table.text('comments')
      table.timestamps()
    })
  }

  down() {
    this.drop('consultings')
  }
}

module.exports = ConsultingSchema
