import React from 'react';
import { pokemonData } from '../../Data/pokemonData';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../Types/PokemonSchema';
import './../App/App.css';
import Pokedex from './../Pokedex/Pokedex'

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}


class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined
    }

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined
            }; 

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites)
            } catch (e) {
                console.log(`Exception while parsing the sprites: ${e}`);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites
            };

            return patchedPokemon;
        })

        return patchedPokemons;
    }
    
    componentDidMount() {
        //Patch the stringified pokemon sprites
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        )

        // console.log(patchedPokemons);
            
        // Update the state with the patched pokemon

        this.setState({
            allPokemons: patchedPokemons,
            searchedPokemons: patchedPokemons,
        })
    }
    
    handleInputChange = (inputValue: string) => {
        console.log(inputValue);
        //filter the searched pokemons
        const { allPokemons } = this.state;

        const searchedPokemons = allPokemons.filter(
            (pokemon: PokemonSchema) => {
                return(
                    pokemon.name && (
                        pokemon.name.toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                )
            }

            )
            this.setState({
                searchField: inputValue,
                searchedPokemons: searchedPokemons,
            })
        
    }

    handleClick = (pokemonName: string) => {
        const { searchedPokemons } = this.state;

        // FInd the selected pokemon from the searched pokemon
        const selectedPokemon = searchedPokemons.find(
            (pokemon: PokemonSchema) =>  pokemon.name === pokemonName
        );
        this.setState({selectedPokemon})
        
    }
    
    render() {
        return(
            <div className="app">
                <h1>Pokedex App</h1>
                <Pokedex 
                    searchedPokemons={this.state.searchedPokemons}
                    onInputChange={this.handleInputChange}
                    selectedPokemon={this.state.selectedPokemon}
                    onPokemonClick={this.handleClick}
                />
            </div>
        )
    }
}

export default App;