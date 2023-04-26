import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from './detail.module.css'

const URL_BASE = 'http://localhost:3001/rickandmorty/character'

const Detail = () => {
    const [character, setCharacter] = useState({});
    let {id} = useParams()

    useEffect(() => {
        axios(`${URL_BASE}/${id}`) 
        .then(({ data }) => {
            if (data.name) setCharacter(data);
            else window.alert('No hay personajes con ese ID');
        })
        return setCharacter({});
    }, [id]);

    return (
        <section className={styles.characterContainer}>
            <div className={styles.imagenContainer}>
                {character ? <img src={character.image}></img> : null}
            </div>
            
            <div className={styles.division}></div>

            <div className={styles.descriptionContainer} >
                {character ? <h1>{character.name}</h1> : null}
                {character ? <h2>Status | {character.status}</h2> : null}
                {character ? <h2>Species | {character.species}</h2> : null}
                {character ? <h2>Gender | {character.gender}</h2> : null}
                {character && character.origin ? <h2>Origin | {character.origin.name}</h2> : null}
            </div>
        </section>
        // Otra opcion(Conditional chaining) --> <h2>{character?.name}</h2>
    )
}

export default Detail;