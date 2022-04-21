import { useState, useEffect } from 'react';
import { MovieCard } from "./MovieCard";

export const Favorites = () => {
    const [films, setFilms] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(data => setFilms(data))
    }, [])

    const handleDelete = (deletedId) => {
        let updatedFilms = films.filter((movie) => movie.id !== deletedId);
        setFilms(updatedFilms);
    };

  return (
    <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">FAVORITES</h1>
            <span className="count-pill">
                {films.length} {films.length === 1 ? "Movie" : "Movies"}
            </span> 
                </div>
        {films.length > 0 ? (
            <div className="movie-grid">
                {films.map((movie) => (
                    <MovieCard movie={movie} handleDelete={handleDelete} />
                ))}
            </div>
        ) : (
            <h2 className='no-movies'>No movies added yet.</h2>
        )}
                
            </div>
        </div>
  );

  };
