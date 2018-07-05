'use strict'

/**
 * Resourceful controller for interacting with complains
 */
class ComplainController {
  /**
   * Show a list of all complains.
   * GET complains
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new complain.
   * GET complains/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new complain.
   * POST complains
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single complain.
   * GET complains/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing complain.
   * GET complains/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update complain details.
   * PUT or PATCH complains/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a complain with id.
   * DELETE complains/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ComplainController
