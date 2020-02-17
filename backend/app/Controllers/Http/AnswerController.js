'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {
  async index() {
    const answers = await Answer.query()
      .with('user')
      .with('question')
      .fetch()

    //just for admins
    return answers
  }

  async store({ request, auth }) {
    const data = request.only(['question_id', 'file_id', 'description'])
    console.log(data)
    // question_id get from frontend question form
    const answer = await Answer.create({ ...data, user_id: auth.user.id })

    return answer
  }

  async show({ params }) {
    const answer = await Answer.findOrFail(params.id)

    await answer.load('question')
    await answer.load('user')
    await answer.load('file')

    return answer
  }

  async update({ params, request }) {
    const answer = await Answer.findOrFail(params.id)

    const data = request.only(['file_id', 'description'])

    answer.merge(data)

    await answer.save()

    await answer.load('question')
    await answer.load('user')
    await answer.load('file')

    return answer
  }
}

module.exports = AnswerController
