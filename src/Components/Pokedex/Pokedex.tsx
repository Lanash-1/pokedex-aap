import React from 'react';
import './../Pokedex/Pokedex.css';
import Pokesearchresult from './../Pokesearchresult/Pokesearchresult'
import SearchBox from './../SearchBox/SearchBox'
import Pokelist from '../Pokelist/Pokelist'
import { PokemonSchema } from '../../Types/PokemonSchema';

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
    selectedPokemon: PokemonSchema | undefined;
}

const Pokedex = ({searchedPokemons, onInputChange, selectedPokemon, onPokemonClick}: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox
                  onInputChange={onInputChange}
                />
                <Pokelist 
                  onPokemonClick={onPokemonClick}
                  searchedPokemons = {searchedPokemons}
                />
            </div>
            <div className="pokesearchresult-container">
                <Pokesearchresult
                  selectedPokemon={selectedPokemon}
                />
            </div>
        </div>
    )
}

export default Pokedex;