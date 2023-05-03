const express = require('express')
const {
  getMovies,
  getSingleMovie,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie
} = require('../controllers/movieController')

const router = express.Router()

// GET all movies
router.get('/', getMovies) 

// GET a single movies
router.get('/singlemovie', getSingleMovie) 

// GET a single movie by id
router.get('/:id', getMovie) 

// POST a new movie
router.post('/', createMovie)

// DELETE a movie
router.delete('/:id', deleteMovie) 

// UPDATE a movie
router.patch('/:id', updateMovie) 

module.exports = router