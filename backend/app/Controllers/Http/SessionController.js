'use strict'

const User = use('App/Models/User')

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User.findByOrFail('email', email)

    return response.json({
      user: { id: user.id, name: user.name, email: user.email },
      token
    })
  }
}

module.exports = SessionController
