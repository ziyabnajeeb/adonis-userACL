'use strict'

// Bring Post model in
const Post = use('App/Models/Post')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index ({ request, response, view }) {

    // Fetching all posts in
    const posts = await Post.all()

    return view.render('posts.index', {
      title: 'Latest Post',
      posts: posts.toJSON()
    })
    //return 'hello';
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   */
  async create ({ request, response, view }) {
    return view.render('posts.create')
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ request, response, session }) {
    const post = new Post()

    post.title = request.input('title')
    post.body = request.input('body')
    await post.save()

    session.flash({ notification: 'Post created successfully...' })

    return response.redirect('/posts')
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show ({ params, request, response, view }) {
    const post = await Post.findOrFail(params.id)
    return view.render('posts.show', {
      post: post
    })
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
