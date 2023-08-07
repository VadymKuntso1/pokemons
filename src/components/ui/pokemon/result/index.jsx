import React, { useState } from "react";
import data from "../attributesColor.json"
import photo from "../../../media/images/pokemon.jpg"
import "../css/index.css"

const Pokemon = ({id, image, title, properties, onClick}) =>{

    return(
        <div className="pokemon" onClick={()=>onClick(id)}>
            <img src={image?image:photo} alt="" />
            <div className="title"><b> {title}</b> </div>
            <div className="properties" >
                {properties.map((value,index)=>(
                    <span className="property" style={{background:data[value]}}>
                        {value}
                    </span>
                ))}
            </div>
        </div>
    )
}
export default Pokemon;