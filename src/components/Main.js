import { useEffect, useState } from "react"
import getDogs from "../services/getDogs"
import Loader from "./Loader"
import Dog from "./Dog"
import './Main.css'

export default function Main(){
    const [dogs, setDogs] = useState()

    useEffect(()=>{
        getDogs(1).then(res => setDogs(res))
    },[])

    useEffect(()=>{
        console.log(dogs)
    },[dogs])


    if (dogs) return <main className="content">{
        dogs.map(each => <Dog key={each.id} {...each}/>)
    }</main>

    else return <Loader />
    
} 