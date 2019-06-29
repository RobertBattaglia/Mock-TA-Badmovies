import React from 'react';

const Movie = ({ showFaves, deleteMovie, saveMovie, movie }) => {
  return (
    <React.Fragment>
      <li
        className="movie_item"
        onClick={() => {
          showFaves ? deleteMovie(movie.id) : saveMovie(movie);
        }}
      >
        <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} />
        <div className="movie_description">
          <h2>{movie.title}</h2>
          <section className="movie_details">
            <div className="movie_year">
              <span className="title">Year</span>
              <span>{movie.release_date.slice(0, 4)}</span>
            </div>
            <div className="movie_rating">
              <span className="title">Rating</span>
              <span>{movie.popularity}</span>
            </div>
          </section>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Movie;
