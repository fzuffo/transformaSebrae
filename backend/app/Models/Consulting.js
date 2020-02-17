'use strict'

const Model = use('Model')

class Consulting extends Model {
  static boot() {
    super.boot()

    this.addHook('afterCreate', 'ConsultingHook.sendNewFormMail')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Consulting
