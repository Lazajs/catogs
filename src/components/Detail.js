import { useLocation } from "wouter"

export default function Detail({current}){
    const [location,] = useLocation()
    // const race = location.slice(location.indexOf('l/')+2, location.lastIndexOf('/'))
    const name = location.slice(location.lastIndexOf(location.slice(location.indexOf('l/')+2, location.lastIndexOf('/')))+4).replace('%20', ' ')
    let thisAnimal = current.find(n => n.name === name)
    console.log(name)
    console.log(thisAnimal)
    return (
        <article>

        </article>
    )
}