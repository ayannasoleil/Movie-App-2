import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globals';

export const Results = ({ movie }) => {
  const { 
    addMovieToFavorites, 
    favorites, 
    viewed 
  } = useContext(GlobalContext);

    let storedMovie = favorites.find((o) => o.id === movie.id);
    let storedMovieViewed = viewed.find((o) => o.id === movie.id);
    
    const favoritesDisabled = storedMovie 
    ? true : storedMovieViewed ? true : false;
   
  return (
  <div className='result-card'>
    <div className="poster-wrapper">
      {movie.poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        />
      ) : (
        <div className='filler-poster' />
      )}
    </div>

    <div className='info'>
    <div className="header">
      <h3 className="title">{movie.title}</h3>
    </div>

    <div className="controls">
      <button className="btn"
      disabled={favoritesDisabled}
      onClick={() => addMovieToFavorites(movie)}>
      Add to Favorites</button>

    </div>
    </div>
    </div>
  );
};