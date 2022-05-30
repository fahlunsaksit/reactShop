import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const product = await Product.find({})

    res.json(product)
  })
)

// @desc    Fetch products by id
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    let product = await Product.findById(req.params.id)
    console.log('2')
    console.log('2')
    console.log('2')
    console.log('2')
    console.log('2')
    if (product) {
      res.send(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
