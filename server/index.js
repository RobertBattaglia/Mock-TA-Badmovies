var express = require('express');
var bodyParser = require('body-parser');
var movieController = require('./controllers/movieController.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/movie/genres', function(req, res) {
  movieController.getGenres(req, res);
});

app.get('/movie/search/:genreId', function(req, res) {
  movieController.getSearch(req, res);
});
app.get('/movie', function(req, res) {
  movieController.getFavorites(req, res);
});

app.post('/movie', function(req, res) {
  movieController.saveMovie(req, res);
});

app.delete('/movie/:id', function(req, res) {
  movieController.deleteMovie(req, res);
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
