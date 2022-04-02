export default async function getDogs({page, limit}){
    const API_KEY = process.env.REACT_APP_API_KEY
    const URL =  `https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`

    
    const request = await fetch(URL , {headers : {'x-api-key': API_KEY}})
    const response = await request.json()
    return response
}