import { ADD_FAV, REMOVE_FAV } from "./actions"

const initialState = {myFavorites: []}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_FAV: 
            return {...state, myFavorites: [...state.myFavorites, payload]}
        case REMOVE_FAV:
            console.log(payload)
            return {...state, myFavorites: state.myFavorites.filter((favorite) => parseInt(favorite.id) == payload)}
        default:
            return {...state}
    }
}