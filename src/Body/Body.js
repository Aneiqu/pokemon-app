import './Body.css'
import SearchBar from '../Header/SearchBar/SearchBar'
import PokemonImage from './PokemonImage/PokemonImage'
import PokemonDescription from './PokemonDescription/PokemonDescription'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useState } from 'react'

export default function Body(){
    const [pokemonImage, setPokemonImage] = useState('')
    const lookForPokemon = async function(pokemonName){
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            setPokemonImage(response.data.sprites.front_default);
        } catch(err) {
            console.log(err + " ERROR");
        }
    }


    return(
        <div className="body-container">
            <SearchBar returnPokemon={lookForPokemon}/>
            <PokemonImage pokemonImage={pokemonImage}/>
            <PokemonDescription/>
            <Footer/>   
        </div>
    )
}