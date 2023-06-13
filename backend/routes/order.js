
const express = require('express')
const {
  createOrder
} = require('../controllers/orderController')

const router = express.Router()


// POST a new movie
router.post('/', createOrder)


module.exports = router

