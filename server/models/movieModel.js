//For Mongo
const favorites = require('../../db/mongodb').favorites;

module.exports = {
  save: (movie, cb) => {
    favorites
      .findOneAndUpdate({ id: movie.id }, movie, { upsert: true })
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  },
  delete: (id, cb) => {
    favorites
      .deleteOne({ id })
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  },
  get: cb => {
    favorites
      .find()
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  }
};
