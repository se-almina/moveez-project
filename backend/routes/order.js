
const express = require('express')
const {
  createOrder
} = require('../controllers/orderController')
// const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

// require auth for all order routes
// router.use(requireAuth)

// POST a new movie
router.post('/', createOrder)


module.exports = router

