import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globals';
import { Movies } from "./Movies";

export const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">MY FAVORITES</h1>

            <span className='count-pill'>
              {favorites.length} {favorites.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>

          {favorites.length > 0 ? (
            <div className="movie-grid">
              {favorites.map((movie) => (
                <Movies movie={movie} key={movie.id} type="favorites" />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>No movies added yet.</h2>
          )}
        </div>
      </div>
  );
};
