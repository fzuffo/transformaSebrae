'use strict'
const Consulting = use('App/Models/Consulting')
const User = use('App/Models/User')

class ConsultingController {
  async index() {
    const consultings = await Consulting.query()
      .with('user')
      .fetch()

    const json = consultings.toJSON()

    return json
  }

  async store({ response, auth }) {
    const userId = auth.user.id
    const user = await User.findOrFail(userId)

    if (!user.consultant) {
      const consultingId = await Consulting.findBy({ user_id: userId })

      if (consultingId) {
        return response.status(401).send({
          error: {
            message: 'Usuário já submeteu o formulário, favor aguardar.'
          }
        })
      }
    } else {
      return response.status(401).send({
        error: {
          message: 'O formulário não pode ser submetido por um consultor.'
        }
      })
    }

    const consulting = await Consulting.create({ user_id: auth.user.id })
    return consulting
  }
  async show({ params }) {
    const consulting = await Consulting.findOrFail(params.id)

    await consulting.load('user')

    const json = consulting.toJSON()
    return json
  }

  async update({ request, params, response, auth }) {
    const consulting = await Consulting.findOrFail(params.id)

    const userId = auth.user.id

    const user = await User.findOrFail(userId)

    if (!user.consultant) {
      return response.status(401).send({
        error: { message: 'Usuário não autorizado.' }
      })
    }
    const statusNew = request.only(['status'])

    if (statusNew.status) {
      consulting.merge({ consultant_id: userId, status: statusNew.status })
    }

    if (!consulting.status) {
      consulting.merge({ consultant_id: userId, status: 'Aguardando análise' })
    }

    await consulting.save()

    return consulting
  }
}

module.exports = ConsultingController
