'use strict'

class PagesController {
  async index({ request, view, response, auth }){
    return view.render('pages.index')
  }
}

module.exports = PagesController
