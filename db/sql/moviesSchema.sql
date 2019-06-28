CREATE DATABASE IF NOT EXISTS badmovies;

use badmovies;

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id INT AUTO_INCREMENT,
  title VARCHAR(256),
  poster_path VARCHAR(256),
  release_date VARCHAR(256),
  popularity DECIMAL(4,1),
  PRIMARY KEY(id)
);