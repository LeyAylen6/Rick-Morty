import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Card = (props) => {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();                                    //FUNCIONAL
   const myFavorites = useSelector((state) => state.myFavorites)      //FUNCIONAL

   // Comprueba si el personaje que contiene la Card ya está dentro de favs.
   // useEffect(() => {
   //    for (let i = 0; i < props.myFavorites.length; i++) {
   //       if (isFav.id === props.character.id) {
   //          setIsFav(true);
   //       }
   //    };
   // }, [props.myFavorites])

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
      

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(props.character.id))     
      } else {
         setIsFav(true)
         dispatch(addFav(props.character))            
      }
   }

   return (
      <div className={styles.card}>
         { isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         
         <button className={styles.button} onClick={() => props.onClose(props.character.id)}>X</button>
         
         <img className={styles.img} src={props.character.image} alt='Rick and Morty' />

         <Link to={`/detail/${props.character.id}`} className={styles.linkName}>
            <h3 className="cardName">{props.character.name}</h3>
         </Link>
         
      </div>
   );
}

export default Card;