import { useEffect, useContext } from 'react'
import Animal from './Animal'
import Search from './Search'
import './Main.css'
import useAnimals from 'hooks/useAnimals'
import { Route } from 'wouter'
import Detail from './Detail'
import {AnimalCTX} from "context/AnimalCTX";

export default function Main () {
  const context = useContext(AnimalCTX) //this is a reducer, receives an object of action, and payload
  const {info, setInfo, ACTIONS} = context
  const {shown, search} = info

  // animales que son mostrados
  const createAnimals = useAnimals()

  useEffect(() => {
    // initial animals info
    if (!shown.length) createAnimals().then(res => setInfo({action: ACTIONS.PUT, payload: res}))
    // else if (search) setInfo({action: ACTIONS.SEARCH, payload: search})
  }, [shown])

  const handleClick = () => {
    // load more
    createAnimals(true).then(res => setInfo({action: ACTIONS.ADD, payload: res})) // pasar un argumento truthy carga la siguiente página
  }

  return (
    <>
      <Search utils={context} />

      <Route path='/'>
        <div className='wrapper'>
          <main className='content'>
            {
              shown ? shown.map(each => <Animal key={each.id} {...each} />) : ''
            }
          </main>
        </div>
        <button onClick={handleClick} className='pageup'>More animals</button>
      </Route>

      <Route path='/search/:query'>
        <div className='wrapper'>
          <main className='content'>
            {
                        search ? search.map(each => <Animal key={each.id} {...each} />) : ''
                    }
          </main>
        </div>
      </Route>

      <Route path='/detail/:animal/:name'>
            <Detail current={shown} />
        <div className='wrapper disable'>
          <main className='content'>
            {
                        shown ? shown.map(each => <Animal key={each.id} {...each} />) : ''
                    }
          </main>
        </div>
      </Route>

    <Route path='/search/:query/detail/:animal/:name'>
    <Detail current={search} />
        <div className='wrapper disable'>
          <main className='content'>
            {
                        shown ? shown.map(each => <Animal key={each.id} {...each} />) : ''
                    }
          </main>
        </div>
    </Route>
    </>
  )
}
