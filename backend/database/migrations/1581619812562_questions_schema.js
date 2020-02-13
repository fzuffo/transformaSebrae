'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionsSchema extends Schema {
  up() {
    this.create('questions', table => {
      table.increments()
      table.text('description', 255).notNullable()
      table
        .boolean('enabled')
        .defaultTo(true)
        .notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema
