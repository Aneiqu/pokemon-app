import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './SearchBar.css'

export default function SearchBar( {returnPokemon} ){
    const [inputValue, setInputValue] = useState('')
    
    // document.addEventListener("keypress", function(e){
    //     if(!(e.key === "Enter")) return
    //     console.log(e.key);
    //     // returnPokemon(inputValue.toLowerCase())
    // })
    function handleInput(button) {
        if(!(button.key === "Enter")) return
        returnPokemon(inputValue.toLowerCase())
    }

    return(
        <div className="searchbar-container" onKeyDown={(e) => handleInput(e)}>
            <input className="pokemon-searchbar" type="text" placeholder="Search..." value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }}></input>
            <button className='pokemon-search-button' onClick={() => returnPokemon(inputValue.toLowerCase())}><AiOutlineSearch size={40}/></button>
        </div>
    )
}