import axios from "axios";

export const ACCESS_LOGIN = 'ACCESS_LOGIN'
export const GET_CHARACTERS_BY_ID = 'GET_CHARACTERS_BY_ID'
export const DELETE_CARD = 'DELETE_CARD'

export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'

export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


const URL_GET_CHARACTERS_BY_ID = `http://localhost:3001/rickandmorty/character/`
const URL_LOGIN = 'http://localhost:3001/rickandmorty/login/';
const URL_ADD_FAV = 'http://localhost:3001/rickandmorty/fav';
const URL_REMOVE_FAV_BY_ID = `http://localhost:3001/rickandmorty/fav/`;

// ! PETICIONES CON PROMISES

export const accessLogin = (userData, dispatch) => {
   const { email, password } = userData;
      
   axios(`${URL_LOGIN}?email=${email}&password=${password}`)

   .then(response => {
      const { access } = response.data;
      dispatch({ type: ACCESS_LOGIN, payload: access })
   })

   .catch(error => {
      const { access } = error.response.data;
      dispatch({ type: ACCESS_LOGIN, payload: access })
   });  
}

export const logout = () => {
   return {type: ACCESS_LOGIN, payload: false}
}

export const getCharactersById = (id, dispatch) => {
   
   axios(`${URL_GET_CHARACTERS_BY_ID}${id}`)

   .then(response => {
      dispatch({ type: GET_CHARACTERS_BY_ID, payload: response.data })
   })
   .catch(() => window.alert('¡No hay personajes con este ID!'))      
}

export const deleteCard = (id) => {
   return {type: DELETE_CARD, payload: id}
}

export const addFav = (character, dispatch) => {

   axios.post(URL_ADD_FAV, character)
   .then(({ data }) => {
      dispatch({ type: ADD_FAV, payload: data});
   });
};


export const removeFav = (id, dispatch) => {
   
   axios.delete(`${URL_REMOVE_FAV_BY_ID}${id}`)
   .then(({ data }) => {
      dispatch({ type: 'REMOVE_FAV', payload: data });
   });
};



export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (orden) => {
    return {type: ORDER, payload: orden}
}
