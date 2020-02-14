'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

Route.group(() => {
  Route.get('files/:id', 'FileController.show') //fix to get by namefile
  Route.post('files', 'FileController.store')

  Route.get('questions', 'QuestionController.index')
  Route.get('questions/:id', 'QuestionController.show')
  Route.post('questions', 'QuestionController.store').validator('Question')
  Route.put('questions/:id', 'QuestionController.update').validator('Question')

  Route.get('answers', 'AnswerController.index')
  Route.get('answers/:id', 'AnswerController.show')
  Route.post('answers', 'AnswerController.store').validator('Answer')
  Route.put('answers/:id', 'AnswerController.update').validator('Answer')

  Route.post('consultings', 'ConsultingController.store').validator(
    'Consulting'
  )
  Route.get('consultings', 'ConsultingController.index')
  Route.get('consultings/:id', 'ConsultingController.show')
  Route.put('consultings/:id', 'ConsultingController.update').validator(
    'Consulting'
  )
}).middleware(['auth'])

// Route.resource('questions', 'QuestionController').apiOnly()
