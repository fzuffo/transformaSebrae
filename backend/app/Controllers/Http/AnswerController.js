'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {
  async index({ auth }) {
    const answers = await Answer.query()
      .where('user_id', auth.user.id)
      .with('user')
      .with('question')
      .fetch()

    //just for admins
    return answers
  }

  async store({ request, auth }) {
    const { data } = request.all()
    console.log(data)
    // const data = request.only(['question_id', 'file_id', 'description'])
    const newData = Object.keys(data).map(key => ({
      question_id: key.substring(1),
      description: data[key],
      user_id: auth.user.id
    }))
    console.log(newData)

    await Answer.query()
      .where('user_id', auth.user.id)
      .delete()

    const answer = await Answer.createMany(newData)

    return answer
  }

  async show({ params }) {
    const answer = await Answer.findOrFail(params.id)

    await answer.load('question')
    await answer.load('user')
    await answer.load('file')

    return answer
  }

  async update({ params, request, auth }) {
    const answer = await Answer.all()

    const data = request.only(['question_id', 'description'])

    const ans = await Answer.find('user_id', auth.user.id)
    console.log(ans)
    answer.merge(data)

    await answer.save()

    await answer.load('question')
    await answer.load('user')
    await answer.load('file')

    return ans
  }
}

module.exports = AnswerController
