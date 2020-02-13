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
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('question_id')
        .unsigned()
        .references('id')
        .inTable('questions')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.text('description')
      table.timestamps()
    })
  }

  down() {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
