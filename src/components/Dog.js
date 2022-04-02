import './Dog.css'

export default function Dog({image, name}){



    return <div className='container'>
           {
               image    ? <>   <img alt='dog' src={image.url} className='image' />
                            <p>{name}</p></>
                        : ''
           }
                
            </div>
}