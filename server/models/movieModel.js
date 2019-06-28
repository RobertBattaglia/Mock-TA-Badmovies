//SELECT one db to work with
//For Mongo
// const mongoDb = require('../../db/mongodb')

//For SQL
const sqlDb = require('../../db/sql');

module.exports = {
  save: (movie, cb) => {
    const sql = `INSERT INTO favorites
    (title, poster_path, release_date, popularity)
    VALUES (?, ?, ?, ?)`;
    const vals = [
      movie.title,
      movie.poster_path,
      movie.release_date,
      movie.popularity
    ];
    sqlDb.query(sql, vals, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  }
};
