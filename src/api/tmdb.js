import axios from 'axios';

const tmdb_key = process.env.TMDB_API

export default axios.create({
    baseURL :'https://api.themoviedb.org/3/movie/550?api_key'+tmdb_key

})