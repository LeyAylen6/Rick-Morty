import { connect } from 'react-redux';
import Card from '../Card/Card';

const Favorites = (props) => {
    console.log(props.myFavorites)
    return (
        <div>
            {props.myFavorites.map((character) => <Card character={character} key={character.id} /> )}
        </div>
    )
}

const mapStateToProps = (state) => {                           
    return {
       myFavorites: state.myFavorites,
    };
}

export default connect(mapStateToProps, null)(Favorites);
