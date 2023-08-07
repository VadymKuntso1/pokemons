import React from "react";
import Pokemon from "../../../ui/pokemon/result";
import "../css/index.css";

const List = ({values, onClick}) =>{
    return(
        <div className="list">
            {values.map((value,index)=>(
                <div key={index}>
                <Pokemon
                    onClick={onClick}
                    id={value.id}
                    image ={value.image}
                    title={value.title}
                    properties={value.properties}
                />
                </div>
            ))}
           
        </div>
    )
}
export default List;