import React, { useState } from 'react';
import { Results } from './Results';

export const Search = ({ movie }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const onChange = (e) => {

    setQuery(e.target.value);

    // fetch movie 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
      });
    };

    // search bar & results
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" 
            placeholder='Search Movie'
            value={query}
            onChange={onChange}
            />
          </div>
        
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <Results movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
