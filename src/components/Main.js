import { useEffect, useState } from "react"
import getDogs from "../services/getDogs"
import Loader from "./Loader"
import Dog from "./Dog"
import Aside from "./Aside"
import './Main.css'

export default function Main(){
    const [dogs, setDogs] = useState()
    
    //opciones de request, falta hacerlo declarativo
    const options = {
        page: 1,
        limit: 10,
    }

    useEffect(()=>{
        //request
        getDogs(options).then(res => setDogs(res))
    },[])

    if (dogs) {
        return <div className="wrapper"> 
        <main className="content">
            {
                dogs.map(each => <Dog key={each.id} {...each}/>)
            }
        </main>
        <Aside/>
        </div>
    }

    else return <Loader />
    
} 