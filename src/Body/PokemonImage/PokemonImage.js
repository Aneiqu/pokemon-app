import './PokemonImage.css'

export default function PokemonImage( {pokemonImage} ){
    return(
        <div className="pokemon-image-container">
            <img className="pokemon-image" src={pokemonImage} alt="Current pokemon">
            </img>
        </div>
    )
}