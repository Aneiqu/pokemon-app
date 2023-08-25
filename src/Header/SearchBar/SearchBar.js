import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar( {returnPokemon} ){
    const [inputValue, setInputValue] = useState('')
    


    return(
        <div className="searchbar-container">
            <input className="pokemon-searchbar" type="text" placeholder="Search..." value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }}></input>
            <button className='pokemon-search-button' onClick={() => returnPokemon(inputValue)}/>
        </div>
    )
}