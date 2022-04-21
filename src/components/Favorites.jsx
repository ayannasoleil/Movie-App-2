import { useState, useEffect } from 'react';
import { MovieCard } from "./MovieCard";

export const Favorites = () => {
    const [film, setFilm] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(data => setFilm(data))
    }, [])

  return (
    <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">FAVORITES</h1>
            <span className="count-pill">
                {film.length} {film.length === 1 ? "Movie" : "Movies"}
            </span> 
                </div>
        {film.length > 0 ? (
            <div className="movie-grid">
                {film.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        ) : (
            <h2 className='no-movies'>No movies added yet.</h2>
        )}
                
            </div>
        </div>
  );

  };