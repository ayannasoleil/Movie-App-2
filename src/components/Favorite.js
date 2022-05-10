// create title, movieCard and set favorite movie (useState)
// create functions for event handler changes (allowing user to type multiple movies in text box)
// create event handler for submission (allowing user to click submit button and submit fave movie)

// simple submit form that allows user to create favorite movie

import React, { useState } from "react";

function Favorite() {
  const [title, setTitle] = useState("");
  const [movieCard, setMovieCard] = useState("");
  const [faveMovie, setFaveMovie] = useState([]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleMovieCardChange(e) {
    setMovieCard(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const movieObj = { title: title, movieCard: movieCard };
    const movieArray = [...faveMovie, movieObj];
    setFaveMovie(movieArray);
    setTitle("");
    setMovieCard("");
  }

  // fetch ("http://")

  const listOfFavorites = faveMovie.map((movie) => {
    return (
        <div className="movie-card">
        {movie.title}
        <img
        src={`https://image.tmdb.org/t/p/w500/${movie.movieCard}`}
        alt={`${movie.title} Poster`}
      />

      </div>
    );
  });

  return (
     <div>

      <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Title: </label>
        <input type="text" onChange={handleTitleChange} value={title} />
        
        <label htmlFor="name"> URL: </label>
        <input type="text" onChange={handleMovieCardChange} value={movieCard} />
        
        <button type="submit">Submit</button>
      </form>

      <h3>Favorites</h3>
      {listOfFavorites}
      </div>
  );
};
      
export default Favorite;