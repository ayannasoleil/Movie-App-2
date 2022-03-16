import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globals';

export const Controls = ({ type, movie }) => {
  const { 
    removeMovieFromFavorites, 
    addMovieToViewed, 
    moveToFavorites, 
    removeFromViewed } = useContext(GlobalContext);
  
  return (
  <div className='inner-card-controls'>
    {type === 'favorites' && (
      <>
      <button className="ctrl-btn" 
      onClick={() => addMovieToViewed(movie)}>
        <i className="fa-fw far fa-eye"></i>
        </button>

      <button className="ctrl-btn"
      onClick={() => removeMovieFromFavorites(movie.id)}>
        <i className="fa-fw fa fa-times"></i>
        </button>
        </>
    )}

    {type === "viewed" && (
      <>
      
      <button className='ctrl-btn' onClick={() => moveToFavorites(movie)}>
      <i className='fa-fw far fa-eye-slash'></i>
      </button>

      <button className='ctrl-btn'
      onClick={() => removeFromViewed(movie.id)}>
        <i className='fa-fw fa fa-times'></i>
      </button>
      </>
    )}
    </div>
  );
};
