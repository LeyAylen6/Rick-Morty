import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import NotFound from './components/NotFound/NotFound';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//require("dotenv").config()


const URL_BASE = 'http://localhost:3001/rickandmorty/character'

function App() {
   //dotenv.config();
   //console.log(dotenv.config())

   const navigate = useNavigate();
   const accessLogin = useSelector((state) => state.accessLogin)

   useEffect(() => {
      !accessLogin && navigate('/');
      accessLogin && navigate('/home'); //Si quiero poner 404, tengo q eliminar esto y agregar cookies.
   }, [accessLogin]);

   // Tendria que agregar que cambie tambien segun el estado de error
   // Si error === true que se modifique un estado (CREAR NUEVO) en react 
   // con el cual vamos a poner despues en return 
   // si estado react == true, renderiza x componente : null


   return (
      <div className='App'>
         {useLocation().pathname !== '/' && <NavBar /> }
         {useLocation().pathname === '/' && <Form /> }
         
         <Routes> 
            <Route path='/home' element={<Cards />} /> 
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            {/* <Route path='/:other' element={<NotFound />} /> */}
         </Routes>
      </div>
   );
}

export default App;
