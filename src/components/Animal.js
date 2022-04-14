/* eslint-disable react/jsx-indent */
import './Animal.css'
import { useState } from 'react'
import star from 'images/star.svg'
import starred from 'images/starred.svg'
import { useLocation } from 'wouter'

export default function Animal ({ image, name }) {
  const [details, setDetails] = useState({ show: false, fav: false })
  const { show, fav } = details
  const [location, navigate] = useLocation()

  let which; 
  try {
    which = String(image.url).includes('cat') ? 'cat' : 'dog'
  } catch (e) {
    console.log(name)
  }
    

  const handleDetails = (e) => {
    // access to animal details
    const target = String(e.target.className)

    if (target.includes('image') || target.includes('container')) {
      setDetails({ ...details, show: !show })
    } else if (target.includes('star')) {
      setDetails({ ...details, fav: !fav })
    } else if (target.includes('more-button')) {
      let order = location.at(-1) === '/' ? location.slice(0,-1) : location
      navigate(location.includes('search') ? order + `/detail/${which}/${name}` : `/detail/${which}/${name}`)
    }
  }

  if (image) {
    return (
      <div onClick={handleDetails} className='container'>
        {
                    !show
                      ? <img alt='animal' src={image.url} className='image' />

                      : <>
                        <img alt='animal' src={image.url} className='image filter' />
                        <img alt='star' src={fav ? starred : star} className={!fav ? 'star' : 'star starred'} />
                        <button className='more-button'>More</button>

                        </>
                }
        <p>{name}</p>
      </div>
    )
  } else return  ''
}
