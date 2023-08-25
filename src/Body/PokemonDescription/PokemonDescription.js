import './PokemonDescription.css'

export default function PokemonDescription( { PokemonAbilities } ){
    console.log(PokemonAbilities);
    return(
        <div className="description-container">
            <p className="pokemon-description">
                <cite>
                    {PokemonAbilities[0] ? PokemonAbilities[0].effect_entries.filter(e => e.language.name == 'en')[0].effect : 'Search a pokemon!'}
                </cite>
            </p>
        </div>
    )
}