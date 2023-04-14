import styles from './searchBar.module.css';
import { useState } from 'react';

const SearchBar = (props) => {
   const [input, setInput] = useState('');

   const handleChange = (e) => {
      setInput(e.target.value)
   }

   return (
      <div className={styles.searchBar}>
         <input className={styles.searchBarInput} type='search' onChange={handleChange} value={input} />
         <button className={styles.searchBarButton} onClick={() =>{props.onSearch(input); setInput('')}}>Add character</button>
      </div>
   );
}

export default SearchBar;