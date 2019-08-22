import axios from 'axios';

const tmdb_key = process.env.TMDB_API

export default axios.create({
    baseURL :'https://api.themoviedb.org/3'+tmdb_key

})