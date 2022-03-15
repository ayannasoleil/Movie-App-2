import React from 'react';
import { Controls } from './Controls';

export const Movies = ({ movie, type }) => {
  return (
    <div className="movie-card">
        <div className="overlay"></div>

    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
    alt={`${movie.title} Poster`} />
    
  <Controls type={type} movie={movie} />
    </div>
  );
};
