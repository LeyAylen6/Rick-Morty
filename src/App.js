import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '3c0d461e0779.b55c53a0610570647f8c';

function App() {
   let [characters, setCharacters] = useState([]);

   let [access, setAccess] = useState(true);

   const navigate = useNavigate();

   const EMAIL = 'email@gmail.com'
   const PASSWORD = 'Password'

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   const login = (userData) => {
      if (EMAIL === userData.email && PASSWORD === userData.password){
         setAccess(true);
         navigate('/home');
      } 
   }

   const logout = () => {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
         {useLocation().pathname !== '/' && <NavBar logout={logout} onSearch={onSearch} /> }
         {useLocation().pathname === '/' && <Form login={login} /> }
         
         <Routes> 
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
