require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const multer=require('multer')
const movieRoutes = require('./routes/movie')
const orderRoutes = require('./routes/order')
const cors= require('cors');
const path = require('path');



// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors());
const backendDir = path.join(__dirname, 'backend'); // Set backend directory path
const frontendDir = path.join(__dirname, 'frontend/src'); // Set frontend directory path

// Serve static files from the "frontend" folder
app.use(express.static(frontendDir));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/movies', movieRoutes)
app.use('/order', orderRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 