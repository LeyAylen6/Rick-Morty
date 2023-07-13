import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites'
import NotFound from './components/NotFound/NotFound';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FormBase from './components/Form/FormBase';

//require("dotenv").config()

function App() {

   const navigate = useNavigate();
   const accessLogin = useSelector((state) => state.accessLogin)

   useEffect(() => {
      !accessLogin.access && navigate('/');
      accessLogin.access && navigate('/home'); //Si quiero poner 404, tengo q eliminar esto y agregar cookies.
   }, [accessLogin]);

   return (
      <div className='App'>
         {useLocation().pathname !== '/' && <NavBar /> }
         { useLocation().pathname === '/' && <FormBase />}

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
