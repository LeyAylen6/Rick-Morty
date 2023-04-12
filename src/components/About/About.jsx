import React from "react";
import styles from "./about.module.css"
import image from "./../../assets/LeilaSalguero.jpg"

const About = (props) => {
    return (
        
        <div className={styles.aboutContainer}>
            <img className={styles.image} src={image} />
            
            <div className={styles.about}>
                <h1>Welcome!</h1>
                <h2>I'm Leila Salguero</h2> 
                <p>Descripcion breve</p>
                <link to='https://github.com/LeyAylen6'/>
                <link to='https://www.linkedin.com/in/leilaaylensalguero/'/>
                <h3>¿Que se uso en este proyecto?</h3>
            </div>
        </div>
    )
}

export default About;