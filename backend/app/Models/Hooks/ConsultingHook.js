'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/SendNewFormMail')

const ConsultingHook = (exports = module.exports = {})

ConsultingHook.sendNewFormMail = async consultingInstance => {
  if (!consultingInstance.user_id) return

  const { email, name } = await consultingInstance.user().fetch()

  Kue.dispatch(Job.key, { email, name }, { attempts: 3 })
}
