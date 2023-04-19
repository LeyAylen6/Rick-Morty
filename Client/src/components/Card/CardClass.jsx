import React from 'react';
import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';

class CardClass extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            isFav: false 
        };

        this.handleFavorite = this.handleFavorite.bind(this)
    }
    
    handleFavorite() {
        if (this.state.isFav) {
           this.setState(
            ...this.state,
            this.state.isFav = false)
            
           props.removeFav(props.character.id)                  
        
        } else {
            this.setState(
                ...this.state,
                this.state.isFav = true)  //Va con igual?
           props.addFav(props.character)                       
        }
    }

    render() {
        return (
            <div className={styles.card}>
                { isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
                
                <button className={styles.button} onClick={() => props.onClose(props.character.id)}>X</button>
                
                <img className={styles.img} src={props.character.image} alt='Rick and Morty' />

                <Link to={`/detail/${props.character.id}`} className={styles.linkName}>
                    <h3 className="cardName">{props.character.name}</h3>
                </Link>
            
            </div>
            
        )
    }

    mapStateToProps(state) {                           
        return {
            myFavorites: state.myFavorites,
        };
    }

    mapDispatchToProps(dispatch) {                      
        return {
            addFav: (character) => { dispatch(addFav(character));
            },
            removeFav: (id) => {dispatch(removeFav(id));
            }
        }   
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CardClass);