import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {myFavorites: [], allCharacters: []}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_FAV: 
            return {
                ...state, 
                myFavorites: [ payload, ...state.myFavorites],
                allCharacters: state.myFavorites
            }

        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((favorite) => favorite.id !== payload)}
        
        case FILTER:
            return {
                ...state, 
                myFavorites: [...state.allCharacters].filter((character) => character.gender == payload)
            }
        
        case ORDER:
            let filter

            if (payload === 'A') filter = [...state.allCharacters].sort((a, b) => a.id - b.id)
            
            if (payload === 'D') filter = [...state.allCharacters].sort((a, b) => b.id - a.id)
            console.log(state.myFavorites)
            return {
                ...state,
                myFavorites: filter
            }

        default:
            return {...state}
    }
}