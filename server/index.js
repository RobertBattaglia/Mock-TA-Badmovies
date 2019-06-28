var express = require('express');
var bodyParser = require('body-parser');
var movieController = require('./controllers/movieController.js');

var app = express();

//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

//OPTION 1: Use regular routes

app.get('/genres', function(req, res) {
  apiHelpers
    .getGenres()
    .then(({ data }) => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get('/search/:genreId', function(req, res) {
  apiHelpers
    .getMovies(req.params.genreId)
    .then(({ data }) => {
      res.send(JSON.stringify(data.results));
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.post('/save', function(req, res) {
  movieController.saveMovie(req, res);
});

app.post('/delete', function(req, res) {
  //remove movie from favorites
});

//OPTION 2: Use Express Router

//IF you decide to go with this option, delete OPTION 1 to continue

//Routes

const movieRoutes = require('./routes/movieRoutes.js');

//Use routes
app.use('/movies', movieRoutes);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
