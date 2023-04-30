import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './navbar.module.css';
import image from './../../assets/rick.jpg';
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions.js";
import { getCharactersById } from "../../redux/actions.js";

const NavBar = (props) => {
    const dispatch = useDispatch();

    const hadleLogout = () => {
        dispatch(logout())
    }

    const onSearchRandom = () => {
        let randomId = Math.round(Math.random() * 1000) + 1
        getCharactersById(randomId, dispatch)
    }

    return(
        <div className={styles.navBar}>
            <img className={styles.img} src={image} alt=''></img>
            
            <div className={styles.buttonsContainer}>
                <button className={styles.aboutButton}>
                    <Link to= {'/about'} className={styles.aboutLinkButton} >About</Link>
                </button>

                <button className={styles.homeButton}>
                    <Link to= {'/home'} className={styles.homeLinkButton}>Home</Link>
                </button>

                <button className={styles.favoritesButton}>
                    <Link to= {'/favorites'} className={styles.favoritesLinkButton}>Favorites</Link>
                </button>
            </div>

            <SearchBar />

            <button className={styles.randomCharacterButton} onClick={onSearchRandom}>Random</button>

            <button className={styles.logout} onClick={hadleLogout}>
                <LogoutIcon />
            </button>
        </div>
    )
}

export default NavBar;
