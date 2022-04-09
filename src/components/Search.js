import './Search.css'
import useSearch from '../hooks/useSearch'
import debounce from 'just-debounce-it'
import getImage from '../services/getImage'

export default function Search({initialAnimals, show}){
    const [search, setSpecies, species] = useSearch()

    const handleChange = debounce((e) => { //do a request when the input change, debounced
        show([])
        if(e.target.value !== '') {
            search(e.target.value).then(resObj => {
                resObj.forEach(el => {
                    getImage(species, el.reference_image_id).then(image =>  show(prev => prev.concat([{...el, image}])))
                })
            })
        } else if (e.target.value === '') initialAnimals().then(res => show(res))
    }, 500)

    return <nav className="searchbox">
                <p>Search by breed</p>
                <input onChange={handleChange} className='search' type='text'/>
                <label className="switch"> 
                    <input onClick={()=> setSpecies(prev => prev === 'dog' ? 'cat' : 'dog')} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p className='switchertext'>search for <span>{species +'s'}</span></p>
            </nav>
}