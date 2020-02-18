'use strict'
const Antl = use('Antl')

class Answer {
  get validateAll() {
    return true
  }
  get rules() {
    return {
      // question_id: 'required',
      // description: 'required'
    }
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Answer
