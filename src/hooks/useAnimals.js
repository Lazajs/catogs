import getCats from "../services/getCats";
import getDogs from '../services/getDogs'

const options = {
    page: 1,
    limit: 10,
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  
async function doRequests(nextPage){
    if (nextPage) options.page++
    // do the requests and return the shuffled
    let reqCats = await getCats(options)
    let reqDogs = await getDogs(options)
    let result = [].concat(reqCats).concat(reqDogs)

    return shuffle(result)
}

export default function useAnimals(){
    return doRequests
    
}