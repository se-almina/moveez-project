const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  movietitle: {
    type: String,
    required: true
  },
  ticketNumber: {
    type: Number,
    required: true
  },
  foodandDrink: {
    type: String,
    required: true
  },
  dateAndTimeOfProjection: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
  
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)


