'use strict'

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
}

module.exports = Question
