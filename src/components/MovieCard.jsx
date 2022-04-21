import React from "react";

export const MovieCard = ({ movie, handleDelete }) => {
  const removeMovieFromFavorites = () => {
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "DELETE",
    }).then(res => {
      if(res.status === 200){
        handleDelete(movie.id);
      }
    })
  };
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      <div className="inner-card-controls">
        <button className="ctrl-btn" onClick={removeMovieFromFavorites}>
          <i className="fa-fw fa fa-times"></i>
        </button>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.card}`}
        alt={`${movie.title} Poster`}
      />
    </div>
  );
};
