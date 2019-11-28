'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

class SessionController {
  async store({ request, response, auth }) {
    const { email, password, google_token, google_login } = request.all()
    if (google_login === undefined) {
      return response.status(400).send({
        error: { message: '<google_login=(boolean)> not provided' },
      })
    }

    if (!google_login) {
      const token = await auth.authenticator('jwt').attempt(email, password)
      return token
    } else {
      try {
        const token = await auth.attempt(email, google_token)
        return token
      } catch (err) {
        return response.status(401).send([
          {
            message: 'Invalid Google Token',
            field: err.passwordField,
          },
        ])
      }
    }
  }
}

module.exports = SessionController
