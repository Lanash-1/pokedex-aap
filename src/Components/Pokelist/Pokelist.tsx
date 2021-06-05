import React from 'react'
import './../Pokelist/Pokelist.css'
import Pokecard from './../Pokecard/Pokecard'
import { PokemonSchema } from '../../Types/PokemonSchema'

interface PokelistProps {
  searchedPokemons: PokemonSchema[];
  onPokemonClick: (pokemonName: string) => void;
}

const Pokelist = ({searchedPokemons, onPokemonClick}: PokelistProps) => {

  return (
      <div className="poke-list">
        {
          searchedPokemons.map((pokemon) => {
            return(
              pokemon.name && (
                <Pokecard
                  onPokemonClick={onPokemonClick}
                  key={pokemon.id}
                  name={pokemon.name}
                  spriteUrl={pokemon.sprites === undefined ? undefined : pokemon.sprites.normal}
                />
              )
            )

          })
        }
      </div>
  )
}

export default Pokelist
