import './Dog.css'

export default function Dog({url, breeds}){
    if(!breeds[0]) return <h1>CARGANDO</h1>
    //the dog details
    const stuff = breeds[0]
    
    return <div className='container'>
                <img alt='dog' src={url} className='image' />
                <p>{stuff.name}</p>
            </div>
}