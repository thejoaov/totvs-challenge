'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const File = use('App/Models/File')
const Product = use('App/Models/Product')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const products = await Product.query()
      .with('picture')
      .orderBy('id', 'desc')
      .paginate(request.qs.page, 10)
    return products.toJSON()
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all()

    const product = await Product.create(data)

    return product
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const product = await Product.findByOrFail('id', params.id)

      await product.load('picture')

      return product
    } catch (err) {
      return response.status(err.status).send({
        error: {
          message: `Cannot find product with id ${params.id}`,
          reason: err.message,
        },
      })
    }
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const product = await Product.findOrFail(params.id)
      const data = request.all()

      if (data.file_id) {
        await File.findOrFail(data.file_id)
      }

      product.merge(data)
      await product.save()

      return product
    } catch (err) {
      return response.status(400).send({
        error: {
          message: `Cannot update product with given id: ${params.id}`,
        },
      })
    }
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const product = await Product.findOrFail(params.id)

      await product.delete()
    } catch (err) {
      return response.status(err.status).send({
        error: {
          message: `Cannot delete product with given id: ${params.id} `,
          reason: err.message,
        },
      })
    }
  }
}

module.exports = ProductController
