export default async function useSearch(species, keyword){
    // return the response for the animal 
    const API_KEY = species === 'dog' ? process.env.REACT_APP_API_KEY : process.env.REACT_APP_API_KEY_CATS //different api key for each animal
    const URL = `https://api.the${species}api.com/v1/breeds/search?q=${keyword}`
    const request = await fetch(URL , {headers : {'x-api-key': API_KEY}})
    const response = await request.json()
    return response
}