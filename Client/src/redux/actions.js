import axios from "axios";
//const { URL_GET_CHARACTERS_BY_ID, URL_LOGIN, URL_ADD_FAV, URL_REMOVE_FAV_BY_ID } = process.env;

export const SIGN_UP = 'SIGN_UP'
export const ACCESS_LOGIN = 'ACCESS_LOGIN'
export const GET_CHARACTERS_BY_ID = 'GET_CHARACTERS_BY_ID'
export const DELETE_CARD = 'DELETE_CARD'
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

const URL_GET_CHARACTERS_BY_ID = 'http://localhost:3001/rickandmorty/character/';
const URL_SIGN_UP = 'http://localhost:3001/rickandmorty/signUp';
const URL_LOGIN = 'http://localhost:3001/rickandmorty/login';
const URL_ADD_FAV = 'http://localhost:3001/rickandmorty/fav';
const URL_REMOVE_FAV_BY_ID = 'http://localhost:3001/rickandmorty/fav/';

// ! PETICIONES CON ASYNC AWAIT

export const createNewAccount = async(dispatch) => {

   const response = await axios(URL_SIGN_UP)
   
   try {
      const { signUp } = response.data;
      dispatch({ type: SIGN_UP, payload: signUp })
     
   } catch(error) {
      const { signUp } = error.response.data;
      dispatch({ type: SIGN_UP, payload: signUp})
   }
}

export const redirectSignUp = (dispatch) => {
   dispatch({ type: SIGN_UP, payload: false})
}

export const redirectLogIn = (dispatch) => {
   dispatch({ type: SIGN_UP, payload: true})
}

export const accessLogin = async (userData, dispatch) => {
   const { email, password } = userData;
      
   const response = await axios(`${URL_LOGIN}?email=${email}&password=${password}`)

   try {
      const { access } = response.data;
      dispatch({ type: ACCESS_LOGIN, payload: access })
      
   
   } catch(error) {
      const { access } = error.response.data;
      dispatch({ type: ACCESS_LOGIN, payload: access })
   };  
}

export const logout = () => {
   return {type: ACCESS_LOGIN, payload: false}
}

export const getCharactersById = async (id, dispatch) => {

   try {
      const response = await axios(`${URL_GET_CHARACTERS_BY_ID}${id}`)
      
      dispatch({ type: GET_CHARACTERS_BY_ID, payload: response.data })
   
   } catch (error) {
      console.log(error)
      window.alert('¡No hay personajes con este ID!')      
   }
}

export const deleteCard = (id) => {
   return {type: DELETE_CARD, payload: id}
}

export const addFav = async (character, dispatch) => {

   const response = await axios.post(URL_ADD_FAV, character)
   
   try {
      dispatch({ type: ADD_FAV, payload: response.data});
   
   } catch(error) {
      // dispatch de un estado error.
   }
};


export const removeFav = async (id, dispatch) => {
   
   const response = await axios.delete(`${URL_REMOVE_FAV_BY_ID}${id}`)
   
   try {
      dispatch({ type: 'REMOVE_FAV', payload: response.data });
   }

   catch(error) {
      // dispatch de un estado error igual que addFav
   }
};


export const filterCards = (gender) => {
   return {type: FILTER, payload: gender}
}

export const orderCards = (orden) => {
   return {type: ORDER, payload: orden}
}

  