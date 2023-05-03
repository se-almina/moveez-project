const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  cast: {
    type: String,
    required: true
  },
  dateAndTimeOfProjection: {
    type: Date,
    required: true
  },
  durationH: {
    type: Number,
    required: true
  },
  durationM: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Movie', movieSchema)