import { useEffect } from 'react'
import Animal from './Animal'
import Search from './Search'
import './Main.css'
import useAnimals from '../hooks/useAnimals'
import { Route } from 'wouter'
import Detail from './Detail'

export default function Main ({shown, setShown}) {
  // animales que son mostrados
  const createAnimals = useAnimals()

  useEffect(() => {
    // initial animals shown
    createAnimals().then(res => setShown(res))
  }, [])

  const handleClick = () => {
    // load more
    createAnimals(true).then(res => setShown(prev => prev.concat(res))) // pasar un argumento truthy carga la siguiente página
  }

  return (
    <>
      <Search initialAnimals={createAnimals} show={setShown} />

      <Route path='/'>
        <div className='wrapper'>
          <main className='content'>
            {
                        shown ? shown.map(each => <Animal key={each.id} {...each} current={shown} />) : ''
                    }
          </main>
        </div>
        <button onClick={handleClick} className='pageup'>More animals</button>
      </Route>

      <Route path='/search/:query'>
        <div className='wrapper'>
          <main className='content'>
            {
                        shown ? shown.map(each => <Animal key={each.id} {...each} />) : ''
                    }
          </main>
        </div>
      </Route>

      <Route path='/detail/:animal/:name'>
        <Detail current={shown} />
      </Route>
    </>
  )
}
