const { request } = require('undici');
const {movieDbAuth} =require('../config.json')

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
async function getAnimes(){
    const animeResult = await request(`https://kitsu.io/api/edge/anime?filter[id]=${getRandomArbitrary(1,1000)}`);
    const { data } = await animeResult.body.json();
    return data
}

async function getMovies(){
  const movieResults = await request(`https://api.themoviedb.org/3/movie/${getRandomArbitrary(1,1000)}`,{
    headers:{authorization:`Bearer ${movieDbAuth}`}
  });
  const data = await movieResults.body.json();
  console.log(data.original_title)
  console.log(data.overview)
  return data
}

getMovies()


module.exports={getAnimes}