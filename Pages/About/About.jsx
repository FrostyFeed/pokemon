import {Link, useLocation, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import "../About/style.css"
import Pokedex from './Pokedex'
import Stats from './Stats'
function About(){
    const navigate = useNavigate()
    const [pokedexIsActive,setActivePokedex] = useState(true)
    const location = useLocation()
    const pokemon = location.state
    pokemon.types.map((type,index) =>(
        console.log(type.type.name)
    ))
    return(
        <div>
        <div className="top">
            <div className="Section">
                <button onClick={() => navigate(-1)} className="backBtn">Back</button>
                <div className="pokemon">{pokemon.name}</div>
            </div>
            <div className="Section right">
                <div className="pokemonId">#{pokemon.id}</div>
            </div>
        </div>
        <div className="main">
            <div className="img">
                <img src={pokemon.sprites.front_default} alt="" className="pokemonImg"/>
            </div>
            <div className="info-section">
                <div className="btns">
                    <button className="statBtn" onClick={() => setActivePokedex(true)}>Pokedex</button>
                    <button className="statBtn" onClick={() => setActivePokedex(false)}>Stats</button>
                    <button className="statBtn">Evolution</button>
                </div>
                <div className="stats">
                    {pokedexIsActive ? <Pokedex pokemon={pokemon}/> : <Stats pokemon={pokemon}/>}
                </div>
            </div>
        </div>
        
        
    </div>
    )
}

export default About