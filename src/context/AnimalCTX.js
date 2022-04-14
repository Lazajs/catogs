import { createContext, useReducer } from "react";

const AnimalCTX = createContext([])

const ACTIONS = {
    SPECIES: 'species',
    ADD: 'shown',
    RESET: 'reset',
    SEARCH: 'search',
    PUT: 'put',
    CLEAR_SEARCH: 'clear_search'
}

function reducer(state, {action, payload}){
    switch (action){
        case ACTIONS.SPECIES:
            return {...state, species: payload}
        case ACTIONS.PUT:
            return {...state, shown: payload}
        case ACTIONS.ADD:
            return {...state, shown: Array.isArray(state.shown) ? state.shown.concat(payload) : payload}
        case ACTIONS.RESET:
            return {...state, shown: []}
        case ACTIONS.SEARCH:
            return {...state, search: Array.isArray(state.search) ? state.search.concat(payload) : payload}
        case ACTIONS.CLEAR_SEARCH:
            console.log('clear')
            return {...state, search: []}
        }
        return state
}


export {AnimalCTX}
export default function AnimalProvider({children}){
    const [info, setInfo] = useReducer(reducer, {shown: [], species: 'dog', search: []})

    return (
        <AnimalCTX.Provider value={{info, setInfo, ACTIONS}}>
            {children}
        </AnimalCTX.Provider>
    )
}   
