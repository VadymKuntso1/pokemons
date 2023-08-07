import React, {useState, useEffect} from "react";
import "../css/index.css"
import photo from "../../../media/images/pokemon.jpg"

const Card = ({card}) =>{
    const [pokemon,setPokemon] = useState({
        id:0,
        title:"",
        type:[],
        attack:0,
        defense:0,
        hp:0,
        spAttack:0,
        spDefense:0,
        speed:0,
        weight:0,
        totalmooves:0
    })

    const setData=(object)=>{
        var types = [];
        object['types'].map((value, index)=>{
            types.push(value['type']['name'])
        })
        console.log()
        var count = 0;
        object['moves'].map((value,index)=>{
            count++;
        })
        setPokemon({
            id:object['id'],
            title:object['name'],
            type:types,
            attack:object['stats'][1]['base_stat'],
            defense:object['stats'][2]['base_stat'],
            hp:object['stats'][0]['base_stat'],
            spAttack:object['stats'][3]['base_stat'],
            spDefense:object['stats'][4]['base_stat'],
            speed:object['stats'][5]['base_stat'],
            weight:object['height'],
            totalmooves:count
        })
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/'+(card.id))
           .then((res) => res.json())
           .then((data) => {
              setData(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, [card]);

    return(
        <div className="card" style={{display:card.title?"block":"none"}}>
            
            <img src={card.photo?card.photo:photo} alt="photo" />
            <h1>{pokemon.title} # {pokemon.id}</h1>
            <div className="properties">
                <span className="title">
                    Type
                </span>
                <span className="value">
                {pokemon.type.map((value,index)=>(
                    <p className="property">
                        {value}
                    </p>
                ))}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    Attack
                </span>
                <span className="value">
                {pokemon['attack']}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    Defense
                </span>
                <span className="value">
                {pokemon['defense']}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    HP
                </span>
                <span className="value">
                {pokemon['hp']}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    SP attack
                </span>
                <span className="value">
                {pokemon['spAttack']}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    SP defense
                </span>
                <span className="value">
                {pokemon['spDefense']}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    Speed
                </span>
                <span className="value">
                {pokemon['speed']}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    Weight
                </span>
                <span className="value">
                {pokemon['weight']}
                </span>
            </div>
            <div className="properties">
                <span className="title">
                    Total mooves
                </span>
                <span className="value">
                {pokemon['totalmooves']}
                </span>
            </div>
        </div>
    )
}
export default Card;
