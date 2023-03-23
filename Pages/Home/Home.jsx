import React, { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import "./sctyle.css";
import Pages from "./Pages";
function Home(){
    const [allPokemon,setAllPokemon] = useState([])
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10")
    const [hover,setHover] = useState(false)
    const [pokemon,setPokemon] = useState()
    const setDate = (pokemon) => {
        setPokemon(pokemon)
        setHover(true)
    }
    const changeUrl = (offset) =>{
        setUrl(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
    }
    const test2=async () =>{
        setAllPokemon([])
        const result = await axios(url)
        result.data.results.map(async (item) => {
            const result = await axios(item.url)
            
            setAllPokemon((oldArray) => [...oldArray,result.data])
            
        })
    }
    useEffect(
        () => {
           test2()
           console.log("eqs")
        },[url]
    )
    return(
        <div>
            <div className="mainn">
            <PokemonList allPokemon={allPokemon.sort((a,b) => a.id > b.id ? 1 : -1)} setDate={setDate} setHover={setHover}/>
            <PokemonCard isActive={hover} pokemon={pokemon}/>
            </div>
            <Pages changeUrl={changeUrl}/>
            
        </div>
    )
}

export default Home