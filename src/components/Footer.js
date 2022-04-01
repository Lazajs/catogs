import './Footer.css'

function NotFound(){
    return <div className='notfound'>
        <p>:(</p>
        <p>Nothing in here yet</p>
    </div>
}


export default function Footer(){
    return <footer className='foot'>
        <div className='favs'>
            <h3>Favourites</h3>
            <NotFound />
        </div>
        <a href='https://github.com/Lazajs/catogs' target='_blank' >Github repo</a>
        <a href='https://twitter.com/holetih' target='_blank'>Twitter</a>
        <p className='credit'>Made by Lázaro</p>
        <p className='credit'>MIT license</p>
    </footer>
}