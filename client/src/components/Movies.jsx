import React from 'react';
import Movie from './Movie.jsx';

const Movies = props => {
  return (
    <ul className="movies">
      {props.movies.map(movie => {
        return (
          <Movie
            key={movie.id}
            movie={movie}
            saveMovie={props.saveMovie}
            deleteMovie={props.deleteMovie}
            showFaves={props.showFaves}
          />
        );
      })}
    </ul>
  );
};

export default Movies;
