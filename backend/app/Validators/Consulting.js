'use strict'
const Antl = use('Antl')

class Consulting {
  get validateAll() {
    return true
  }
  get rules() {
    return {}
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Consulting
