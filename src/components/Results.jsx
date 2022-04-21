import React, {useState} from 'react';

export const Results = ({movie}) => {
  const [clicked, setClicked] = useState(false)
  const addMovieToFavorites = () => {
    
    let favoriteMovie = {
      title: movie.title,
      card: movie.poster_path
    }

  fetch('http://localhost:3000/movies', {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(favoriteMovie)

})
  .then (res => res.json())
  .then ((data) => setClicked(!clicked))
  }

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
      <button disabled={clicked} className="btn"
      onClick={addMovieToFavorites}> 
      Add to Favorites</button>
      </div>
    </div>
    </div>
    
      );
};

