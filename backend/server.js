import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.get('/api/products/:id', (req, res) => {
  let product = products.find((p) => p._id === req.params.id)
  res.send(product)
})

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
