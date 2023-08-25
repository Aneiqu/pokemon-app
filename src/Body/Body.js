import './Body.css'
import SearchBar from '../Header/SearchBar/SearchBar'
import PokemonImage from './PokemonImage/PokemonImage'
import PokemonDescription from './PokemonDescription/PokemonDescription'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useState } from 'react'

export default function Body(){
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemonDescription, setPokemonDescription] = useState('')
    const lookForPokemon = async function(pokemonName){
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            setPokemonImage(response.data.sprites.front_default);
            const pokemonAbilities = response.data.abilities.map(e => e.ability.url)
            abilitiesDescription(pokemonAbilities)
        } catch(err) {
            console.log(err + " ERROR");
        }
    }
    async function abilitiesDescription(pokemonAbilities){
        try{
            const response = await Promise.all(pokemonAbilities.map(
                ability => {
                    return axios.get(ability)
                }))
            const abilities = response.map(e => {
                return e.data
            })
            setPokemonDescription(abilities)
        } catch(err){
            console.log(err);
        }
    } 

    return(
        <div className="body-container">
            <SearchBar returnPokemon={lookForPokemon}/>
            <PokemonImage pokemonImage={pokemonImage}/>
            <PokemonDescription PokemonAbilities={pokemonDescription}/>
            <Footer/>   
        </div>
    )
}