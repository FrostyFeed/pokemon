import React from "react";
import "../Pages/style.css"

function Pages({changeUrl}) {
    return(
    <div className="container">
        <div className="page" onClick={() => changeUrl(0)}><span className="text">1</span></div>
        <div className="page" onClick={() => changeUrl(10)}><span className="text">2</span></div>
        <div className="page" onClick={() => changeUrl(20)}><span className="text">3</span></div>
        <div className="page" onClick={() => changeUrl(30)}><span className="text">4</span></div>
        <div className="page" onClick={() => changeUrl(40)}><span className="text">5</span></div>
        <div className="page" onClick={() => changeUrl(50)}><span className="text">6</span></div>
        <div className="page" onClick={() => changeUrl(60)}><span className="text">7</span></div>
        <div className="page" onClick={() => changeUrl(70)}><span className="text">8</span></div>
        <div className="page" onClick={() => changeUrl(80)}><span className="text">9</span></div>
        <div className="page" onClick={() => changeUrl(90)}><span className="text">10</span></div>
    </div>
    )
}

export default Pages;