import getCats from "../services/getCats";
import getDogs from '../services/getDogs'

const options = {
    page: 1,
    limit: 20,
}


async function doRequests(){
    let reqCats = await getCats(options)
    let reqDogs = await getDogs(options)
    return reqCats.concat(reqDogs)
}

export default function useAnimals(){
    return doRequests
}