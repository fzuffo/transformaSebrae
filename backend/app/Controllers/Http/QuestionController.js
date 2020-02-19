'use strict'

const Question = use('App/Models/Question')

class QuestionController {
  async index({ request, response }) {
    const questions = await Question.all()

    const json = questions.toJSON()

    return json
  }

  async store({ request, response }) {
    const data = request.only(['description'])

    const question = await Question.create(data)

    return question
  }

  async show({ params }) {
    const question = await Question.findOrFail(params.id)

    return question
  }

  async update({ params, request }) {
    const question = await Question.findOrFail(params.id)

    const data = request.only(['description', 'enabled'])

    question.merge(data)

    await question.save()

    return question
  }
}

module.exports = QuestionController
