import './Search.css'
import useSearch from '../hooks/useSearch'
import debounce from 'just-debounce-it'

export default function Search({show}){
    const [search, setSpecies, species] = useSearch()

    const handleChange = debounce((e) => {
        if(e.target.value) search(e.target.value).then(res => show(res))
        
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