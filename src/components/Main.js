import { useEffect, useState } from "react"
import Animal from "./Animal"
import Search from "./Search"
import './Main.css'
import Footer from "./Footer"
import useAnimals from "../hooks/useAnimals"


export default function Main(){
    const [shown, setShown] = useState([]) //animales que son mostrados
    const createAnimals = useAnimals()

    const handleClick = () => {
        //load more
        createAnimals(true).then(res => setShown(prev => prev.concat(res))) //pasar un argumento truthy carga la siguiente página
    }

    useEffect(()=> {
        //initial animals shown
        createAnimals().then(res => setShown(res))
    },[])

 
    return  <>
        <Search show={setShown} />

        <div className="wrapper">     
            <main className="content">
                {
                    shown ? shown.map(each => <Animal key={each.id} {...each}/>) : ''
                }
            </main> 
        </div>

        <button onClick={handleClick} className="pageup">More...</button>

        <Footer />
    </>
    

    
} 