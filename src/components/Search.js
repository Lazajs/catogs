import './Search.css'
import useSearch from 'hooks/useSearch'
import debounce from 'just-debounce-it'
import getImage from 'services/getImage'
import { useLocation } from 'wouter'
import { useState, useEffect } from 'react'

export default function Search ({ utils }) { //show is the reducer in context
   //make the request with the query
  const [query, setQuery] = useState('')
  const [, navigate] = useLocation()
  const {setInfo, ACTIONS, info} = utils
  const {species, search} = info

  //use a controlled input but debounce it
  const handleChange = debounce((e) => {
    setQuery(e.target.value)
  }, 150)

  useEffect(()=>{
    // do a request when the input change, debounced
    if (query !== '') {
      useSearch(species, query).then(resObj => {
        if(resObj.length) {
          resObj.forEach(el => {
            getImage(species, el.reference_image_id).then(image => !search.includes([{ ...el, image }]) ? setInfo({action: ACTIONS.SEARCH, payload: [{ ...el, image }]}): '')
            })
            navigate(`/search/${query}`)
          } else {
            navigate('/null')
        }})
    } else if (query === '') {
      navigate('/')
    } 
  },[query])
    

  return (
    <nav className='searchbox'>
      <p>Search by breed</p>
      <input onChange={handleChange} defaultValue={query} className='search' type='text' />
      <label className='switch'>
        <input onClick={() => setInfo({action: ACTIONS.SPECIES, payload: species === 'dog' ? 'cat' : 'dog'})} type='checkbox' />
        <span className='slider round' />
      </label>
      <p className='switchertext'>search for <span>{species + 's'}</span></p>
    </nav>
  )
}
