import React from "react";
function Stats({pokemon}){
    return(
        <>
            {pokemon.stats.map(stat => (
                <div className="row">
                    <div className="atribut">{stat.stat.name}</div>
                    <div className="value"><span className="type">{stat.base_stat}</span></div>
                </div>
            ))}
        </>
    )
}
export default Stats