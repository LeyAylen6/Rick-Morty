import React from "react";
import styles from "./about.module.css"
import image from "./../../assets/LeilaSalguero.jpg"
import linkedin_logo from "./../../assets/linkedin_logo.svg"
import github_logo from "./../../assets/github_logo.svg"
import css_logo from "./../../assets/css3_logo.svg"
import html_logo from "./../../assets/html5_logo.svg"
import javascrip_logo from "./../../assets/javascript_logo.svg"
import react_logo from "./../../assets/react_logo.png"
import redux_logo from "./../../assets/redux_logo.png"
import node_logo from "./../../assets/node_logo.png"
import express_logo from "./../../assets/express_logo.svg"


const About = () => {
    return (
        
        <div className={styles.aboutContainer}>

            <h1>- About -</h1>

            <div className={styles.containerFlex}>
            

                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} />
                </div>

                <div className={styles.division}></div>
                
                <div className={styles.about}>
                    <h2>I'm Leila Salguero</h2> 
                    
                    <div className={styles.contact}>
                        <h3>You can find me at:</h3>
                        <a href='https://github.com/LeyAylen6'>
                            <img src={github_logo} className={`${styles.logo} ${styles.githubLogo}`} name='Github' alt='Github'/>
                        </a>
                        
                        <a href='https://www.linkedin.com/in/leilaaylensalguero/'>
                            <img src={linkedin_logo} className={`${styles.logo} ${styles.linkedInLogo}`} name='LinkedIn' alt='LinkedIn'></img>
                        </a>
                    </div>
                        
                    <h3>What was used in this project?</h3>

                    <div className={styles.herramientasContainer}>

                        <div className={styles.htmlLogo}>
                            <img src={html_logo} className={styles.htmlLogoImg} name='Javascript' alt='Javascript'/>
                        </div>

                        <div className={styles.cssLogo}>
                            <img src={css_logo} name='React' alt='React' className={styles.cssLogoImg} />
                        </div>

                        <div className={styles.jsLogo}>
                            <img src={javascrip_logo} className={styles.jsLogo} name='Javascript' alt='Javascript'/>
                        </div>

                        <div className={styles.reactLogo}>
                            <img src={react_logo} name='React' alt='React' className={styles.reactLogo} />
                        </div>

                        <div className={styles.reduxLogo}>
                            <img src={redux_logo} name='Redux' alt='Redux' className={` ${styles.reduxLogoImg}`} />
                        </div>

                        <div className={styles.nodeLogo}>
                            <img src={node_logo} name='Node' alt='NodeJS' className={` ${styles.nodeLogoImg}`} />
                        </div>

                        <div className={styles.expressLogo}>
                            <img src={express_logo} name='Express' alt='Express' className={` ${styles.expressLogoImg}`} />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;