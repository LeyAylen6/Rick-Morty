import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {myFavorites: [], allCharacters: []}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_FAV: 
            return {
                ...state, 
                myFavorites: [ payload, ...state.allCharacters],
                allCharacters: [ payload, ...state.allCharacters]
            }

        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((favorite) => favorite.id !== payload)}
        
        case FILTER:
            let allCharactersFiltered = state.allCharacters.filter((character) => character.gender == payload)

            return {
                ...state, 
                myFavorites: 
                    payload === 'allCharacters' ? [...state.allCharacters] : allCharactersFiltered
            }

            // return {
            //     ...state, 
            //     myFavorites:
            //     payload === 'allCharacters' ? [...state.allCharacters] : [...state, allCharactersFiltered]}
            // }
        
        
        case ORDER:
            let filter

            if (payload === 'A') filter = [...state.allCharacters].sort((a, b) => a.id - b.id)
            
            if (payload === 'D') filter = [...state.allCharacters].sort((a, b) => b.id - a.id)
        
            return {
                ...state,
                myFavorites: filter
            }

        default:
            return {...state}
    }
}