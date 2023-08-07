import React,{useEffect} from "react";
import "../css/index.css"
import Card from "../../../ui/card/result";

const Aside = ({active}) =>{
    useEffect(()=>{
        console.log(active)
    },[active])
    return(
        <div className="aside-block" style={{"display":active.id?"flex":"none"}}>
            <Card 
                card={active}
            />
        </div>
    )
}
export default Aside;