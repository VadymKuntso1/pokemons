import React,{useState, useEffect} from "react";
import "../css/index.css";
import List from "../../../widgets/list/result";
import Aside from "../../../widgets/aside/result";
import Searching from "../../../ui/searching/result";
import WebFont from 'webfontloader';

const Home = (props) => {
    const [values,setValues] = useState([])
    const [pagginationCount,setPagginationCount]=useState(12);
    const [search,setSearch] = useState('')
    const [viewReult,setViewReult] = useState([])
    useEffect(() => {
        WebFont.load({
            google: {
              families: ['Press Start 2P', 'Chilanka']
            }
          });
        fetch('https://pokeapi.co/api/v2/pokemon/?limit='+pagginationCount)
           .then((res) => res.json())
           .then((data) => {
              setData(data['results']);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, [,pagginationCount]);

     const filter =()=>{
        var filterResult =[]
        filterResult = values.filter(v=>v['properties'].includes(search.toLowerCase()))
        filterResult.length>0?setViewReult(filterResult):setViewReult(values);
        search===""?setViewReult(values):console.log()
     }

     const setData = (data) =>{
        var dataList = []
        data.map((pokemon,index)=>{
            var propertiesList=[]
            fetch('https://pokeapi.co/api/v2/pokemon/'+String(index+1))
            .then((res) => res.json())
            .then((data1) => {
                data1['types'].map((type,index2)=>{
                    propertiesList.push(type['type']['name'])
                })
            })
            .catch((err) => {
                console.log(err.message);
            });
            dataList.push({
                id:index+1,
                image:"",
                title:pokemon['name'],
                properties:propertiesList
            })
        })
        console.log(dataList)
        setValues(dataList);
        setViewReult(dataList)
     }
     const loadMore =()=>{
        setPagginationCount(pagginationCount+12);
     }


    const [activeCard, setActiveCard] = useState([])
    const cardCoise = (index)=>{
        console.log(values[index]);
        setActiveCard(values[index-1])
    }

    const closeWindow = (block) =>{
        if(block.className === "aside-block"){
            setActiveCard([])
        }
    }

    return(
        <div>
            <span className="header">
                Pockedex
            </span>
            <Searching
                value={search}
                onChange={setSearch}
                buttonClick={filter}
            />
            <div className="body">
                <div className="content">
                    <List
                        onClick={cardCoise}
                        values={viewReult}
                    /> 
                </div>
                <div className="aside" onClick={(e)=>{closeWindow(e.target)}} style={{
                    "height":activeCard.title?"100%":"0",
                    }}>
                    <Aside
                        active={activeCard}
                    />
                </div>
            </div>
            <div onClick={loadMore} className="load-more-button">Load more</div>
        </div>
    )
}

export default Home;