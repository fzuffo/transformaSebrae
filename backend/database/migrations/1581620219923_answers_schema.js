'use strict'

const Schema = use('Schema')

class AnswersSchema extends Schema {
  up() {
    this.create('answers', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
      table
        .integer('question_id')
        .unsigned()
        .references('id')
        .inTable('questions')
        .notNullable()
      table.string('description', 255)
      table.timestamps()
    })
  }

  down() {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
