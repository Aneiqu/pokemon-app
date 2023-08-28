import './PokemonDescription.css'

export default function PokemonDescription(props){
    return(
        <div className="description-container">
            <div className="pokemon-description">
                <p>
                    {props.description.length > 1 ? props.description[props.currentPage - 1].flavor_text : "Search a pokemon!"}
                </p>
            </div>
        </div>
    )
}