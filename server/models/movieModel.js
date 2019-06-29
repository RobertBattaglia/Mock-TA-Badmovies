// Using sequelize
const favorites = require('../../db/sql');

module.exports = {
  save: (movie, cb) => {
    favorites
      .create(movie)
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  },
  delete: (id, cb) => {
    favorites
      .destroy({
        where: {
          id
        }
      })
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  },
  get: cb => {
    favorites
      .findAll()
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  }
};
