const Sequelize = require('sequelize');

var sequelize = new Sequelize('badmovies', 'root', 'toor', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const Model = Sequelize.Model;
class Favorites extends Model {}
Favorites.init(
  {
    id: {
      type: Sequelize.INTEGER,
      field: 'id',
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    poster_path: {
      type: Sequelize.STRING
    },
    release_date: {
      type: Sequelize.STRING
    },
    popularity: {
      type: Sequelize.DECIMAL(4, 1)
    }
  },

  { sequelize, timestamps: false, modelName: 'favorites' }
);

Favorites.sync({ force: false })
  .then(() => {
    console.log('connected to MySQL via sequelize');
  })
  .catch(err => {
    console.log(err);
  });

module.exports = Favorites;
