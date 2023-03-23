import React from "react";

function Pokedex({pokemon}) {
    return (
        <>
            <div className="row">
                <div className="atribut">Type</div>
                <div className="value">{pokemon.types.map((type) =>(
                    <span className="type">{type.type.name}</span>
                ))}</div>
            </div>
            <div className="row">
                <div className="atribut">Height</div>
                <div className="value">{pokemon.height} yards</div>
            </div>
            <div className="row">
                <div className="atribut">Weight</div>
                <div className="value">lbc {pokemon.weight}</div>
            </div>
            <div className="row abitilities">
                <div className="atribut">Abilities</div>
                <div className="value list">
                    <ul>
                        {pokemon.abilities.map((abil) =>(
                            <li>{abil.ability.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>

    )
}
export default Pokedex