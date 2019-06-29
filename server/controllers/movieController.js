const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

module.exports = {
  getSearch: (req, res) => {
    apiHelpers
      .getMovies(req.params.genreId)
      .then(({ data }) => {
        res.send(JSON.stringify(data.results));
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getGenres: (req, res) => {
    apiHelpers
      .getGenres()
      .then(({ data }) => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
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
  },
  getFavorites: (req, res) => {
    movieModel.get((err, data) => {
      if (err) {
        res.send(500);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
