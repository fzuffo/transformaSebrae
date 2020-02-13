'use strict'

const Model = use('Model')

class Question extends Model {
  answer() {
    return this.belongsTo('App/Models/Answer')
  }
}

module.exports = Question
