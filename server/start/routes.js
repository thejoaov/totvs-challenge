'use strict'
const { author, description } = require('../package.json')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Home route
Route.get('/', () => {
  return {
    time: new Date(),
    message: 'Welcome to the TOTVS Mobile Challenge API, Have a nice day!',
    info: {
      author,
      description,
    },
  }
})

// Users
Route.post('users', 'UserController.store')
Route.put('users', 'UserController.update').middleware(['auth'])

// Sessions
Route.post('sessions', 'SessionController.store')

// Passwords
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update').middleware(['auth'])

// Files
Route.post('files', 'FileController.store').middleware(['auth'])
Route.get('files/:file', 'FileController.show')

// Products
Route.resource('products', 'ProductController')
  .apiOnly()
  .middleware(['auth'])
