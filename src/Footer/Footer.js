import './Footer.css'

export default function Footer(props){
    const handlePrev = () => {
        if(props.pokemonData.length <= 0) return
        props.currentPage <= 1 ? props.setCurrentPage(props.pokemonData.length) : props.setCurrentPage(currentPage => currentPage - 1)
    }   
    const handleNext = () => {
        if(props.pokemonData.length <= 0) return
        props.currentPage >= props.pokemonData.length ? props.setCurrentPage(1) : props.setCurrentPage(currentPage => currentPage + 1)
        
    }
    return(
        <div className="footer-container">
            <button className="description-nav-button" onClick={handlePrev}>Previous</button>
            <p className='description-page'>{props.pokemonData.length > 0 ? props.currentPage : '0'}/{props.pokemonData.length > 0 ? props.pokemonData.length : '0'} </p>
            <button className="description-nav-button" onClick={handleNext}>Next</button>
        </div>
    )
}