import React from "react";
import "../PokemonCard/style.css"
function PokemonCard({isActive,pokemon}){
    return(
        <div className="card" onClick={() => console.log(isActive)} style={{display: isActive ? "block" : "none"}}>
            <div className="header">
                <p className="id">{isActive ? pokemon.id : ""}</p>
                <p className="name">{isActive ? pokemon.name : ""}</p>
            </div>
            <div className="photo-block"><img className="photo" src={isActive ? pokemon.sprites.front_default : ""} alt="eqweq" /></div>
            <div className="info-block">
                <div className="info">
                    <p className="label">Type</p>
                    <p className="textt">{isActive ?pokemon.types[0].type.name : ""}</p>
                </div>
                <div className="info">
                    <div className="label">Height</div>
                    <div className="textt">{isActive ?pokemon.height : ""}</div>
                </div>
                <div className="info">
                    <div className="label">Weight</div>
                    <div className="textt">{isActive ?pokemon.weight : ""}</div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;
