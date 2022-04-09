import './Animal.css'
import { useState } from 'react'
import star from '../images/star.svg'
import starred from '../images/starred.svg'

export default function Animal({image, name}){
    const [details, setDetails] = useState({show: false, fav: false})
    const {show, fav} = details

    //show more detail onclick btn
    const handleClick= () => {}

    const handleDetails = (e)=>{    
    // access to animal details 
        let target = String(e.target.className)

        if (target.includes('image') || target.includes('container')) {
            setDetails({...details, show: show ? false : true })
        } else if (target.includes('star')) {
            setDetails({...details, fav: fav ? false : true })
        } else if (target.includes('more-button')) {
            handleClick()
        }
    }


    if (image.url) {
        return <div onClick={handleDetails} className='container'>
                {
                    !show ? <img alt='animal' src={image.url} className='image' />
                            
                            :  <>
                                <img alt='animal' src={image.url} className='image filter' />
                                <img alt='star' src={fav ? starred : star} className={!fav ? 'star' : 'star starred'} />
                                <button className='more-button'>More</button>
                              </>
                }   
                    <p>{name}</p>
                </div>
    }
}