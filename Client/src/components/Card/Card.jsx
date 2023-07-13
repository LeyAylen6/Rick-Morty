import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteCard } from '../../redux/actions';


const Card = (props) => {
   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();                                    
   let myFavorites = useSelector((state) => state.myFavorites)      
   let user = useSelector((state) => state.accessLogin.user)      

   useEffect(() => {
      myFavorites.forEach((fav) => {
         
         if (fav.id == props.character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
      

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(props.character.id, user.id, dispatch)     
      } else {
         setIsFav(true)
         addFav(props.character, user, dispatch)        
      }
   }

   const onClose = () => {
      dispatch(deleteCard(props.character.id))
   }

   return (

      <div className={styles.card}>

         <div className={styles.linkNameCard}>
            <Link to={`/detail/${props.character.id}`} className={styles.linkName}>
              {props.character.name} 
            </Link>
         </div>

         <button onClick={handleFavorite} className={styles.favorite}> { isFav ? '❤️' : '🤍' }</button> 
         
         {props.button ? <button className={styles.button} onClick={onClose}><HighlightOffIcon fontSize="small"/></button> : null}
         
         <Link to={`/detail/${props.character.id}`} className={styles.linkName}>
            <img className={styles.img} src={props.character.image} alt='Rick and Morty' />
         </Link>
      </div>
   );
}

export default Card;