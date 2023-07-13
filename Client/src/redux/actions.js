import axios from "axios";

export const SIGN_UP = 'SIGN_UP'
export const ACCESS_LOGIN = 'ACCESS_LOGIN'
export const GET_CHARACTERS_BY_ID = 'GET_CHARACTERS_BY_ID'
export const DELETE_CARD = 'DELETE_CARD'
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const LOGOUT = 'LOGOUT'

// ! PETICIONES CON ASYNC AWAIT

export const createNewAccount = async(newUserData, dispatch) => {

   const response = await axios.post('/signUp', newUserData)
   
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
      
   const response = await axios(`/login?email=${email}&password=${password}`)

   try {
      const userAndAccess = response.data;
      dispatch({ type: ACCESS_LOGIN, payload: userAndAccess })
      
   } catch(error) {
      // dispatch de un estado error.
   };  
}

export const logout = () => {
   return {type: LOGOUT, payload: { access: false }}
}

export const getCharactersById = async (id, dispatch) => {

   try {
      const response = await axios(`/character/${id}`)
      
      dispatch({ type: GET_CHARACTERS_BY_ID, payload: response.data })
   
   } catch (error) {
      console.log(error)
      window.alert('¡No hay personajes con este ID!')      
   }
}

export const deleteCard = (id) => {
   return {type: DELETE_CARD, payload: id}
}

// ! Cuando es post el segundo parametro es lo que le mandas al back y el back lo recibe en el body
export const addFav = async (character, user, dispatch) => {

   try {
      const response = await axios.post('/fav', { character, user })
      dispatch({ type: ADD_FAV, payload: response.data});
   
   } catch(error) {

      // dispatch de un estado error.
   }
};

export const removeFav = async (characterId, userId, dispatch) => {
   
   const response = await axios.delete(`/fav/${characterId}`, { data: { userId: userId }})
   
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

  