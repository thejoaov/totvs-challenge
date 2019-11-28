'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use('App/Models/User')

class UserController {
  async store({ request, response, auth }) {
    try {
      const { email, google_login, google_token, password } = request.all()

      if (google_login && google_token === undefined) {
        return response.status(401).send([
          {
            message: 'Google Token not provided',
          },
        ])
      }

      if (!google_login && password === undefined) {
        return response.status(401).send([
          {
            message: 'Password not provided',
          },
        ])
      }

      const userExists = await User.findBy('email', email)

      const signIn = async () => {
        try {
          if (!google_login) {
            const token = await auth
              .authenticator('jwt')
              .attempt(email, password)
            return { user: userExists, token }
          } else {
            const token = await auth
              .authenticator('google')
              .attempt(email, google_token)
            return { user: userExists, token }
          }
        } catch (error) {
          return response.status(401).send([
            {
              message: `User already exists, but unnafortunately it's not possible to do automatic sign in. Please check the field ${
                google_login ? 'google_token' : 'password'
              } and try again`,
              field: google_login ? 'google_token' : 'password',
            },
          ])
        }
      }

      if (userExists) {
        const user = await signIn()
        return user
      }

      const newUser = await User.create(request.all())
      const { token } = await signIn()

      return { user: newUser, token }
    } catch (err) {
      return response.status(401).send([
        {
          message: 'Cannot create user, please check the request and try again',
          details: err,
        },
      ])
    }
  }

  async update({ params, request, response, auth }) {
    try {
      const user = await User.findOrFail(auth.user.id)

      const data = request.all()

      user.merge(data)

      await user.save()

      return user
    } catch (err) {
      return response.status(401).send([
        {
          message: `Cannot update user with given id: ${params.id}`,
          details: err.message,
        },
      ])
    }
  }
}

module.exports = UserController
