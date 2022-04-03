import './Animal.css'

export default function Animal({image, name}){



    return <div className='container'>
           {
               image    ? <>   <img alt='dog' src={image.url} className='image' />
                            <p>{name}</p></>
                        : ''
           }
                
            </div>
}