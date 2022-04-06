export default function getSingleCats({keyword}){
    const API_KEY = process.env.REACT_APP_API_KEY_CATS
    const URL = `https://api.thecatapi.com/v1/breeds/search?q=${keyword}`

    
    const request = await fetch(URL , {headers : {'x-api-key': API_KEY}})
    const response = await request.json()
    return response
}