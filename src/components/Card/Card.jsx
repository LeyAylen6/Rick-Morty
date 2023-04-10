import styles from './card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
   return (
      <div className={styles.card}>
         {/* <button className={styles.button} onClick={() => props.onClose(props.character.id)}>X</button> */}
         <img className={styles.img} src={props.character.image} alt='Rick and Morty' />

         <Link to={`/detail/${props.character.id}`} className={styles.linkName}>
            <h3 className="cardName">{props.character.name}</h3>
         </Link>
         
      </div>
   );
}

export default Card;