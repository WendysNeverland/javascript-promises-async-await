import {fetchWithTimeout, fetchMovies, fetchBooks} from './services';

function getBooksAndMovies(){
    return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({books, movies}))
    .catch(error =>console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise
.then(reponse => Response.results)
.then(console.log('getBooksandMovies', results));

// const movies = require('./data/movies.json');

// export function fetchMovies(){
//     const resolveFunction = () => movies;

//     return fetchWithTimeout(1000).then(resolveFunction);
// }

// const moviePromise = fetchMovies();
// moviePromise.then(results => {console.log(results)})