'use strict'

class Answer {
  get validateAll() {
    return true
  }
  get rules() {
    return {
      question_id: 'required',
      description: 'required'
    }
  }
}

module.exports = Answer
