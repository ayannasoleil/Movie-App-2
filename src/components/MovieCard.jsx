import React from 'react'

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img src={`https://image.tmdb.org/t/p/w500/${movie.card}`} alt={`${movie.title} Poster`} />
    </div>
  )
}