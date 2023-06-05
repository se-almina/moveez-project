const Movie = require('../models/movieModel')
const mongoose = require('mongoose')
const multer=require('multer')


const Storage=multer.diskStorage({
  destination: "../frontend/src/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload= multer( {
  storage:Storage
}).single('image');

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
  upload(req, res,(err)=> {
    if(err){
      console.log(err)
    } else{
      const newMovie=new Movie( {
        title: req.body.title, 
        director: req.body.director,
        cast: req.body.cast,
        dateAndTimeOfProjection: req.body.dateAndTimeOfProjection,
        durationH: req.body.durationH,
        durationM: req.body.durationM,
        image: {
          data:req.file.filename,
          contentType:'image/png',
          name:req.file.filename
        }

      })
      newMovie.save().then(()=>res.send('successfully uploaded'))
    }
  })
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