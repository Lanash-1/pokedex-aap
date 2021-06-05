import './Pokecard.css';

interface PokecardProps {
    spriteUrl? : string;
    name: string;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokecard = ({spriteUrl, name, onPokemonClick}: PokecardProps) => {
    return (
        <div onClick={() => onPokemonClick(name)
        } className="pokecard">
            <img
                className="pokemon-sprite"
                src={spriteUrl} 
                alt={`${name}'s image`} />

            <p>{name.toUpperCase()}</p>
        </div>
    )
}

export default Pokecard;
