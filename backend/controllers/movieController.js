const Movie = require('../models/movieModel')
const mongoose = require('mongoose')

// get all movies
const getMovies = async (req, res) => {
  const movies = await Movie.find({})

  res.status(200).json(movies)
}
//get a single movie 
const getSingleMovie = async (req, res) => {
  const movies = await Movie.find({}).limit(1);

  res.status(200).json(movies)
}
// get a single movie by id 
const getMovie = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such movie'})
  }

  const movie = await Movie.findById(id)

  if (!movie) {
    return res.status(404).json({error: 'No such movie'})
  }

  res.status(200).json(movie)
}

// create a new movie
const createMovie = async (req, res) => {
  const {title, director, cast, dateAndTimeOfProjection, durationH, durationM} = req.body
  
  try {
    const movie = await Movie.create({title, director, cast, dateAndTimeOfProjection, durationH, durationM})
    res.status(200).json(movie)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a movie
const deleteMovie = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such movie'})
  }

  const movie = await Movie.findOneAndDelete({_id: id})

  if(!movie) {
    return res.status(400).json({error: 'No such movie'})
  }

  res.status(200).json(movie)
}

// update a movie
const updateMovie = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such movie'})
  }

  const movie = await Movie.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!movie) {
    return res.status(400).json({error: 'No such movie'})
  }

  res.status(200).json(movie)
}

module.exports = {
  getMovies,
  getSingleMovie,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie
}