const Order = require('../models/orderModel')
const mongoose = require('mongoose')


// create a new order
const createOrder = async (req, res) => {
    const {movieTitle, ticketNumber, foodandDrink, dateAndTimeOfProjection, price} = req.body
  
    try {
      const order = await Order.create({movieTitle, ticketNumber, foodandDrink, dateAndTimeOfProjection, price})
      res.status(200).json(order)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }


module.exports = {
  createOrder
}
