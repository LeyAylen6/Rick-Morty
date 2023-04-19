import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './navbar.module.css';
import image from './../../assets/rick.jpg';
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = (props) => {
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

            <SearchBar onSearch={props.onSearch} />

            <button className={styles.logout} onClick={props.logout}>
                <LogoutIcon />
            </button>
        </div>
    )
}

export default NavBar;
