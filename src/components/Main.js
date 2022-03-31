import { useEffect, useState } from "react"
import getDogs from "../services/getDogs"
import Dog from "./Dog"
import Search from "./Search"
import './Main.css'

export default function Main(){
    const [shown, setShown] = useState()
    
    //opciones de request, falta hacerlo declarativo
    const options = {
        page: 1,
        limit: 10,
    }

    useEffect(()=>{
        //request
        getDogs(options).then(res => setShown(res))
    },[])

 
    return  <>
        <Search />
    
    
    </>
    
        // <div className="wrapper">     
        //            <main className="content">
        //         {
        //             shown.map(each => <Dog key={each.id} {...each}/>)
        //         }
        //         </main>
        //     </div>

    
} 