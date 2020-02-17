'use strict'

const User = use('App/Models/User')
const Question = use('App/Models/Question')
const Answer = use('App/Models/Answer')

class UserController {
  async store({ request, response }) {
    const data = request.only(['email', 'password', 'consultant'])

    const user = await User.create(data)

    const questions = await Question.all()
    const json = questions.toJSON()

    for (let index = 0; index < json.length; index++) {
      const element = json[index]

      await Answer.create({
        user_id: user.id,
        question_id: element.id,
        description: ''
      })
    }

    return user
  }
}

module.exports = UserController
