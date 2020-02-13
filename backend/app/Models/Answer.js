'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
  question() {
    return this.belongsTo('App/Models/Question')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

  file() {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Answer
