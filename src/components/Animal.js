import './Animal.css'
import { useState } from 'react'
import star from '../images/star.svg'
import starred from '../images/starred.svg'

export default function Animal({image, name}){
    const [details, setDetails] = useState(false)
    const [isStarred, setStarred] = useState(false)


    const handleClick = ()=>{
        // show more
    }


    const handleDetails = (e)=>{    
    // access to animal details 
        let target = String(e.target.className)

        if (target.includes('image') || target.includes('container')) {
            setDetails(details ? false : true)

        } else if (target.includes('star')) {
            setStarred(prev => prev ? false : true)
        } else if (target.includes('more-button')) {
            handleClick()
        }
    }


    if (image) {
        return <div onClick={handleDetails} className='container'>
                {
                    !details ? <img alt='dog' src={image.url} className='image' />
                            : <> 
                                <img alt='star' src={isStarred ? starred : star} className='star' />
                                <button className='more-button'>More</button>
                              </>
                }   
                    <p>{name}</p>
                </div>

    }   
}