import './Search.css'

export default function Search(){
    return <nav className="searchbox">
                <p>Search by breed</p>
                <input className='search' type='text'/>
                <label class="switch"> 
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <p className='switchertext'>&#8592; search for <span>DOGS</span></p>
            </nav>
}