import { useSelector } from 'react-redux';
import Card from '../Card/Card'
import styles from './cards.module.css';

const Cards = (props) => {
   
   let charactersById = useSelector((state) => state.charactersById)
   
   return(
      <div className={styles.homeContainer}>
         <h1>Home</h1>
      
         {charactersById && charactersById.map((character) => {
            return <Card character={character} key={character.id} onClose={props.onClose}/>
         })}
      </div>
   );
};

export default Cards;