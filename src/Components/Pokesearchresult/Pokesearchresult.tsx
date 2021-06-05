import React from 'react'
import { PokemonSchema } from '../../Types/PokemonSchema'
import './../Pokesearchresult/Pokesearchresult.css'

interface PokemonSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
}

const Pokesearchresult = ({selectedPokemon}: PokemonSearchResultProps) => {
    // const selectedPokemon = true
    const {name, id, height, weight, base_experience, sprites} = selectedPokemon || {}

    return (
        <div className="poke-result-card">
            {
                selectedPokemon ? (
                    <div>
                        <img className="animated-pokemon" src={sprites?.animated || sprites?.normal} alt="animated sprite" />
                        <p>Name: {name? name.toUpperCase(): name}</p>
                        <p>id: {id}</p>
                        <p>weight: {weight}</p>
                        <p>height: {height}</p>
                        <p>base Exp: {base_experience}</p>
                    </div>
                ) : <h2>welcome to the pokedex</h2>
            }
        </div>
    )
}

export default Pokesearchresult;