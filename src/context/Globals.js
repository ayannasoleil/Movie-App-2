import React, { createContext, useReducer, useEffect } from 'react';
import Reducer from './Reducer';

// initial value 
const initialState = {
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    viewed: localStorage.getItem('viewed') ? JSON.parse(localStorage.getItem('viewed')) : [],
    
};

//create context 
export const GlobalContext = createContext(initialState);

//providers components 
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
        localStorage.setItem('viewed', JSON.stringify(state.viewed))

    }, [state]);

//actions 
const addMovieToFavorites = movie => {
    dispatch({type: "ADD_MOVIE_TO_FAVORITES", payload: movie});
};


    return (
        <GlobalContext.Provider 
        value={{ 
            favorites: state.favorites, 
            viewed: state.viewed, 
            addMovieToFavorites, }}>
            {props.children}
        </GlobalContext.Provider>
    );
};