import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '3c0d461e0779.b55c53a0610570647f8c';

const Detail = () => {
    const [character, setCharacter] = useState({});
    let {id} = useParams()

    console.log(character)

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
            setCharacter(data);
           if (data.name) {
           } else {
              window.alert('No hay personajes con ese ID');
           }
        })
        .catch((error) => console.log('data', error)
        )
        return setCharacter({});
    }, [id]);

    return (
        <div>
            {character ? <h2>Name | {character.name}</h2> : null}
            {character ? <h2>Status | {character.status}</h2> : null}
            {character ? <h2>Species | {character.species}</h2> : null}
            {character ? <h2>Gender | {character.gender}</h2> : null}
            {character && character.origin ? <h2>Origin | {character.origin.name}</h2> : null}
            {character ? <img src={character.image}></img> : null}
        </div>
        // Otra opcion(Conditional chaining) --> <h2>{character?.name}</h2>
    )
}

export default Detail;