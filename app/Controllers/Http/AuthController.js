'use strict'

/**
 * Resourceful controller for interacting with auths
 */
class AuthController {
  /**
   * Show a list of all auths.
   * GET auths
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new auth.
   * GET auths/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new auth.
   * POST auths
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single auth.
   * GET auths/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing auth.
   * GET auths/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update auth details.
   * PUT or PATCH auths/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a auth with id.
   * DELETE auths/:id
   */
  async destroy ({ params, request, response }) {
  }

  async showLogin({request, response, view}) {

    return view.render('auth/login')
  }

  async login({request, response, auth}) {

    const { email, password } = request.all()

    console.log(email, password);

    try {
      await auth.attempt(email, password)
    } catch (e) {
      console.log(e);
    }

    return response.redirect('/complaints')
  }

  async logout({request, response, auth}) {
    await auth.logout()

    return response.redirect('/login')
  }
}

module.exports = AuthController
