import React from "react";
import "../PokemonList/style.css";
import PokemonCard from "../PokemonCard";
import { useState } from "react";
import { Link } from "react-router-dom";

function PokemonList({ allPokemon, setDate, setHover }) {
    return (
        <div>
            {allPokemon.map((pokemon, index) => (
                <Link to="/about" state={pokemon}>
                    <div className="section" key={index} onMouseEnter={() => { setDate(pokemon) }} onMouseLeave={() => setHover(false)}>
                        <img src={pokemon.sprites.front_default} alt="" />
                        <div className="text" >
                            <p>id {pokemon.id}</p>

                            <p className="pokemonName">{pokemon.name}</p>
                        </div>
                    </div>
                </Link>

            ))}

        </div>

    )
}
export default PokemonList;