import loadData from '../utils/loadData';
import randomizer from '../utils/randomizer';

const getRandomPage = async () => {
    const randomPage = randomizer(1, 500);
    const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}&limit=1`;
    const data = await loadData(url);
    let actor = await data.results[randomizer(1, 20)];
    if (await actor === undefined || await actor.known_for_department !== "Acting" || await actor.known_for[0].original_language !== "en" || await actor.known_for[1].original_language !== "en") {
      actor = await data.results[randomizer(1,20)]
    } 
    return await actor
  };
  
  
export default getRandomPage;