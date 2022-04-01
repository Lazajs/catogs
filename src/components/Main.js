import { useEffect, useState } from "react"
import getDogs from "../services/getDogs"
import Dog from "./Dog"
import Search from "./Search"
import './Main.css'
import Footer from "./Footer"

export default function Main(){
    const [shown, setShown] = useState([])
    
    //opciones de request, falta hacerlo declarativo
    const options = {
        page: 1,
        limit: 20,
    }

    useEffect(()=>{
        //request
        getDogs(options).then(res => setShown(prev => prev.concat(res)))
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

        <button onClick={options.page++} className="pageup">More...</button>

        <Footer />
    </>
    

    
} 