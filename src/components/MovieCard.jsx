import React from 'react'

export const MovieCard = ({ movie }) => {
  
  const removeMovieFromFavorites = () => {
    
  }
    return (
    <div className="movie-card">
      <div className="overlay"></div>
      <div className="inner-card-controls">
        <button className="ctrl-btn" onClick={removeMovieFromFavorites}>
          <i className='fa-fw fa fa-times'></i>
        </button>

      </div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.card}`} alt={`${movie.title} Poster`} />
    </div>
  )
};