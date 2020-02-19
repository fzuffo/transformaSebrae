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

  async update({ request, auth }) {
    const user = await User.findOrFail(auth.user.id)

    const data = request.all()
    console.log(data, user)

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
