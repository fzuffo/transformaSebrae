'use strict'

const Antl = use('Antl')

class Question {
  get validateAll() {
    return true
  }
  get rules() {
    return {
      description: 'required|unique:questions',
      enabled: 'required'
    }
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Question
