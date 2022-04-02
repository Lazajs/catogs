import { useEffect, useState } from "react"
import Dog from "./Dog"
import Search from "./Search"
import './Main.css'
import Footer from "./Footer"
import useAnimals from "../hooks/useAnimals"

export default function Main(){
    const [shown, setShown] = useState([]) //animales que son mostrados
    const createAnimals = useAnimals()


    useEffect(()=> {
        createAnimals().then(res => setShown(res))
    },[])

 
    return  <>
        <Search />

        <div className="wrapper">     
            <main className="content">
                {
                    shown ? shown.map(each => <Dog key={each.id} {...each}/>) : ''
                }
            </main> 
        </div>

        <button className="pageup">More...</button>

        <Footer />
    </>
    

    
} 