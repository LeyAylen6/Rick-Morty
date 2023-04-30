import { useSelector } from 'react-redux';
import styles from './searchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersById } from '../../redux/actions';

const SearchBar = () => {
   let [inputId, setInputId] = useState('');

   const dispatch = useDispatch()
   let charactersById = useSelector((state) => state.charactersById)

   const handleChange = (e) => {
      setInputId(e.target.value)
   }

   const onSearch = () => {
      for(let i = 0; i < charactersById.length; i++) {
         if(charactersById[i].id == inputId) {
            window.alert('¡El personaje ya existe!');
            return 
         }
      }
      getCharactersById(inputId, dispatch);
   }

   return (
      <div className={styles.searchBar}>
         <input className={styles.searchBarInput} type='search' onChange={handleChange} value={inputId} />
         <button className={styles.searchBarButton} onClick={() => {onSearch() ; setInputId('')}} >Search</button>
      </div>
   );
}

export default SearchBar;