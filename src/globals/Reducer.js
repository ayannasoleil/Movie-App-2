//eslint-disable-next-line
export default(state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_FAVORITES":
            return {
                ...state,
            favorites: [action.payload, ...state.favorites],
            };

        case "REMOVE_MOVIE_FROM_FAVORITES":
            return {
                    ...state,
            favorites: state.favorites.filter((movie) => movie.id !== action.payload),
            };

        case "ADD_MOVIE_TO_VIEWED":
            return {
                ...state,
            favorites: state.favorites.filter((movie) => movie.id !== action.payload.id),
            viewed: [action.payload, ...state.viewed],
            };

        case "MOVE_TO_FAVORITES":
            return {
            ...state, 
            viewed: state.viewed.filter((movie) => movie.id !== action.payload.id),
            favorites: [action.payload, ...state.favorites],
        };

        case "REMOVE_FROM_VIEWED":
            return {
                ...state,
                viewed: state.viewed.filter((movie) => movie.id !== action.payload)
            };
        default: 
        return state;
    }
};