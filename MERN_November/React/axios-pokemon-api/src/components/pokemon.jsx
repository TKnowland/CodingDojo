import { useState } from "react";
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    
    const axiosPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0')
            .then(response => {
               setPokemon(response.data.results)
            })
            .catch( (err) => console.log(err))
    }


    return (
        <>
            <button onClick={axiosPokemon}>fetch Pokemon</button>
            {pokemon.map((p, idx) => {
                return (
                    <div key={idx}>
                        <p>{p.name}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Pokemon;