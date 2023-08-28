import './Body.css'
import SearchBar from '../Header/SearchBar/SearchBar'
import PokemonImage from './PokemonImage/PokemonImage'
import PokemonDescription from './PokemonDescription/PokemonDescription'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useState } from 'react'

export default function Body(){
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemonDescription, setPokemonDescription] = useState([])
    const [currentDescPage, setCurrentDescPage] = useState(0)

    const lookForPokemon = async function(pokemonName){
        const seenFlavorText = {}
        try{
            const pokemonDataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const pokemonDescriptionResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
            setPokemonImage(pokemonDataResponse.data.sprites.front_default);
            
            const noDuplicatesAndEngData = pokemonDescriptionResponse.data.flavor_text_entries.filter(el => el.language.name === "en").filter(el => {
                if(!seenFlavorText[el.flavor_text]) {
                    seenFlavorText[el.flavor_text] = true
                    return true
                }
                return false
            })
            
            setPokemonDescription(noDuplicatesAndEngData)
            setCurrentDescPage(1)
        } catch(err) {
            console.log(err + " ERROR");
        }
    }
    return(
        <div className="body-container">
            <SearchBar returnPokemon={lookForPokemon}/>
            <PokemonImage pokemonImage={pokemonImage}/>
            <PokemonDescription description={pokemonDescription} currentPage={currentDescPage}/>
            <Footer pokemonData={pokemonDescription} currentPage={currentDescPage} setCurrentPage={setCurrentDescPage}/>   
        </div>
    )
}