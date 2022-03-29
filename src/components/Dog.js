import './Dog.css'
import Loader from './Loader'

export default function Dog({url, breeds}){
    if(!breeds[0]) return <Loader/>

    //the dog details
    const stuff = breeds[0]
    
    return <div className='container'>
                <img alt='dog' src={url} className='image' />
                <p>{stuff.name}</p>
            </div>
}