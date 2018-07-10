'use strict'

const Complaint = use('App/Models/Complaint')
const Comment = use('App/Models/Comment')
const { validate } = use('Validator')

/**
 * Resourceful controller for interacting with complaints
 */
class ComplaintController {
  /**
   * Show a list of all complaints.
   * GET complaints
   */
  async index ({ request, response, view }) {
    const complaints = await Complaint.all()

    return view.render('complaint/list', {
      complaints: complaints.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new complaint.
   * GET complaints/create
   */
  async create ({ request, response, view }) {
    return view.render('complaint/add')
  }

  /**
   * Create/save a new complaint.
   * POST complaints
   */
  async store ({ request, response, session }) {

    const validation = await validate(request.all(), {
      recruiter_name: 'required|min:3|max:80',
      city: 'required|min:3|max:80',
      body: 'required|min:10|max:1000'
    })

    if(validation.fails()) {
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const complaint = new Complaint()

    complaint.recruiter_name = request.input('recruiter_name')
    complaint.city = request.input('city')
    complaint.company = request.input('company')
    complaint.body = request.input('body')

    await complaint.save()

    return response.redirect('/complaints')
  }

  /**
   * Display a single complaint.
   * GET complaints/:id
   */
  async show ({ params, request, response, view }) {

    const id = params.id
    const complaint = await Complaint.find(id)
    const comments = await Comment.query().where('complaint_id', id).fetch()

    return view.render('complaint/show', {
      complaint,
      comments: comments.toJSON()
    })
  }

  /**
   * Render a form to update an existing complaint.
   * GET complaints/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update complaint details.
   * PUT or PATCH complaints/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a complaint with id.
   * DELETE complaints/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ComplaintController
