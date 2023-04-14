import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from './favorites.module.css'
import stylesCards from '../Cards/cards.module.css'
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions.js'
import { useState } from 'react';

const Favorites = (props) => {
    const [aux, setAux] = useState(false)
    
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={styles.favoritesContainer}>
            <h1>My favorites</h1>

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>

                <option value='D'>Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>

                <option value='Female'>Female</option>

                <option value="Genderless">Genderless</option>

                <option value='unknown'>unknown</option>

                <option value='allCharacters'>allCharacters</option>
            </select>

            <div className={stylesCards.cardsContainer}>
                {props.myFavorites.map((character) => <Card character={character} key={character.id} /> )}
            </div>

            
        </div>
    )
}

const mapStateToProps = (state) => {                           
    return {
       myFavorites: state.myFavorites,
    };
}

export default connect(mapStateToProps, null)(Favorites);
