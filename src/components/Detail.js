import './Detail.css'
import { useLocation } from "wouter"
import Loader from './Loader'
import { useState, useEffect, useMemo } from 'react'

export default function Detail({current}){
    const [location, navigate] = useLocation() 
    const [loadAnimal, setLoad] = useState(false)

    useEffect(()=>{ //is ready yet?
        if (current !== undefined) setLoad(true)
    },[current])

    useEffect(()=>{
        document.body.classList.toggle('disable')
        return ()=> document.body.classList.toggle('disable')
    }, [])

    //get the info for this on
    const breed = useMemo(()=> location.slice(location.lastIndexOf(location.slice(location.indexOf('l/')+2, location.lastIndexOf('/')))+4).replaceAll('%20', ' '), [location])
    const thisAnimal = loadAnimal ? current.find(n => n.name === breed) : ''
    const previous = location.slice(0,location.indexOf('detail'))
    console.log(breed)

    return (
        <article className="detail">
            <button onClick={()=> navigate(previous)} className='quit'>&#10006;</button>
            {
                !thisAnimal ?   <Loader /> 
                            :   <span className='information'>
                                    <img className='photo' src={thisAnimal.image.url}/>
                                    <p className='text name'>{thisAnimal.name}</p>
                                    <p className='text'><span>Temperament:</span> {thisAnimal.temperament}.</p>
                                    <p className='text'><span>Life span:</span> {thisAnimal.life_span}.</p>
                                    {
                                        location.includes('dog')    ?  <>
                                            <p className='text'><span>Breed group:</span> {thisAnimal.breed_group}</p>
                                            <p className='text'><span>Breed for:</span> {thisAnimal.bred_for}</p>
                                            </>                     : <>
                                            <p className='text'><span>Description:</span> {thisAnimal.description}</p>
                                            </>
                                    }
                                </span>
            }

        </article>
    )
}