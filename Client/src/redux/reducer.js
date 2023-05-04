import { SIGN_UP, ACCESS_LOGIN, GET_CHARACTERS_BY_ID, DELETE_CARD, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {
    signUp: true,
    accessLogin: false,
    charactersById: [],
    myFavorites: [], 
    favoritesFiltered: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {

        case SIGN_UP:
            return {
                ...state,
                signUp: payload
            }
            
        case ACCESS_LOGIN:
            return {
                ...state,
                accessLogin: payload
            }

        case GET_CHARACTERS_BY_ID:
            return {
                ...state,
                charactersById: [payload, ...state.charactersById]
            }

        case DELETE_CARD:
            return {
                ...state,
                charactersById: [...state.charactersById].filter(character => character.id !== payload)
            }

        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload,
                favoritesFiltered: payload
            };

        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: payload,
                favoritesFiltered: payload
            };
        
        case FILTER:

            return {
                ...state, 
                favoritesFiltered: 
                    payload === 'allCharacters' 
                    ? [...state.myFavorites] 
                    : state.myFavorites.filter((character) => character.gender == payload)
            }
        
        case ORDER:
            let filter

            if (payload === 'A') filter = [...state.favoritesFiltered].sort((a, b) => a.id - b.id)
            
            if (payload === 'D') filter = [...state.favoritesFiltered].sort((a, b) => b.id - a.id)
        
            return {
                ...state,
                favoritesFiltered: filter
            }

        default:
            return {...state}
    }
}