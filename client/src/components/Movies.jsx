import React from 'react';
import Movie from './Movie.jsx';

const Movies = props => {
  return (
    <ul className="movies">
      {props.movies.map(movie => {
        return (
          <Movie key={movie.id} saveMovie={props.saveMovie} movie={movie} />
        );
      })}
    </ul>
  );
};

export default Movies;
