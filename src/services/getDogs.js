export default async function getDogs({page}){
    const API_KEY = process.env.REACT_API_KEY
    // const URL =  'https://api.thedogapi.com/images/search'
    const URL =  `https://api.thedogapi.com/v1/images/search?limit=10&page=${page}&order=DESC`

    const request = await fetch(URL , {headers : {'x-api-key': API_KEY}})
    const response = await request.json()
    return response
}