import './Animal.css'
import { useState } from 'react'
import star from '../images/star.svg'
import starred from '../images/starred.svg'

export default function Animal({image, name, reference_image_id}){
    const [details, setDetails] = useState({show: false, fav: false})
    
    const handleClick= () => {}

    const handleDetails = (e)=>{    
    // access to animal details 
        let target = String(e.target.className)

        if (target.includes('image') || target.includes('container')) {
            setDetails({...details, show: details.show ? false : true })

        } else if (target.includes('star')) {
            setDetails({...details, fav: details.fav ? false : true })
        } else if (target.includes('more-button')) {
            handleClick()
        }
    }


    if (image) {
        return <div onClick={handleDetails} className='container'>
                {
                    !details.show ? <img alt='animal' src={image.url} className='image' />
                            : <> 
                                <img alt='star' src={details.fav ? starred : star} className='star' />
                                <button className='more-button'>More</button>
                              </>
                }   
                    <p>{name}</p>
                </div>

    }  else if (!image && name) {
        console.log('ass')
    }
}