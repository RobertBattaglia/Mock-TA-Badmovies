const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
  },
  getFavorites: (req, res) => {
    movieModel.get((err, data) => {
      if (err) {
        res.send(500);
      } else {
        res.status(200).send(data);
      }
    });
  },
  saveMovie: (req, res) => {
    movieModel.save(req.body.movie, err => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          res.status(400).send('Duplicate Favorite Entry');
        } else {
          console.log(err);
          res.sendStatus(500);
        }
      } else {
        movieModel.get((err, data) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            res.status(201).send(data);
          }
        });
      }
    });
  },
  deleteMovie: (req, res) => {
    movieModel.delete(req.params.id, err => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        movieModel.get((err, data) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            res.status(202).send(data);
          }
        });
      }
    });
  }
};
