export default async function getCats({limit, page}){
    const API_CATS = process.env.REACT_APP_API_KEY_CATS
    const URL = `https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`

    const request = await fetch(URL , {headers : {'x-api-key': API_CATS}})
    const response = await request.json()
    return response
}