import { useState, useEffect } from "react";


const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch(err => console.log(err))
    }


    return (
        <>
            <button onClick={fetchPokemon}>fetch Pokemon</button>
            {pokemon.map((p, idx) => {
                return (
                    <p>{p.name}</p>
                )
            })}
        </>
    )
}

export default Pokemon;