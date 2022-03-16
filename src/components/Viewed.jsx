import React, { useContext } from 'react';
import { Movies } from './Movies';
import { GlobalContext } from '../globals/Globals';

export const Viewed = () => {
    const { viewed } = useContext(GlobalContext);

    return (
    <div className="movie-page">
        <div className="container">
        <div className="header">
         <h1 className="heading">VIEWED MOVIES</h1>
          <span className='count-pill'>
        {viewed.length} {viewed.length === 1 ? "Movie" : "Movies"}
            </span>
            </div>

            {viewed.length > 0 ? (
            <div className="movie-grid">
            {viewed.map((movie) => (
            <Movies movie={movie} key={movie.id} type="viewed" />
            ))}
    </div>
            ) : (
            <h2 className='no-movies'>No movies added yet.</h2>
            )}
    </div>
    </div>
    );
};