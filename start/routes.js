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
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('home')

Route.get('/complaints', 'ComplaintController.index')

Route.get('/complaints/create', 'ComplaintController.create')

Route.get('/complaints/edit/:id', 'ComplaintController.edit')

Route.get('/complaints/:id', 'ComplaintController.show')

Route.post('/complaints', 'ComplaintController.store')

Route.post('/complaints/:id/comments', 'CommentController.store')

Route.put('/complaints/:id', 'ComplaintController.update')

Route.delete('/complaints/:id', 'ComplaintController.destroy')
