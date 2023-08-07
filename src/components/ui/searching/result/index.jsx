import React from "react";
import "../css/index.css"

const Searching =({value, onChange, buttonClick}) =>{
    return(
        <div>
            <input className="searching-input" type="text" value={value} onChange={e=>{onChange(e.target.value)}} />
            <button className="searching-button" onClick={e=>{buttonClick()}}>search</button>
        </div>
    )
}   

export default Searching;