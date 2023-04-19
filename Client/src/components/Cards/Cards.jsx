import Card from '../Card/Card'
import styles from './cards.module.css';

const Cards = (props) => {
   
   return(
      <div className={styles.homeContainer}>
      <h1>Home</h1>
         <div className={styles.cardsContainer}>
            {props.characters.map((character) => {
            return <Card character={character} key={character.id} onClose={props.onClose}/>
         })}
      </div>
   </div>
   );
};

export default Cards;