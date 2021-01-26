import { result } from 'lodash';
import {fetchWithTimeout, fetchMovies, fetchBooks, asyncFetchBooks, asyncFetchMovies} from './services';

const movies = require('./data/movies.json');
// const books = require('./data/books.json');

const getBooksAndMovies = () =>{
    return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
        books, movies
    }))
    .catch(error =>console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then(results => {
    console.log("getBooksAndMoviesPromise", results);
});

function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
    .then(results => results)
    .catch(error => {
        console.log("Error waiting for the promise race", error);
    });
}

const getBooksOrMoviesPromise = getBooksOrMovies();

getBooksOrMoviesPromise.then(results =>{
    console.log('getBooksOrMoviesPromise', results)
});

async function getBooksAndMoviesAsync(){
    try {
        const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()]);
        return {books, movies};
    } catch (error) {
        console.log("Error fetching books and movies",error);
    }
}

async function getBooksOrMoviesAsync(){
    try {
        const values = await Promise.race([asyncFetchBooks(), asyncFetchMovies()]);
        return values;
    } catch (error) {
        console.error("Error waiting for the promise race",error);
    }
}

getBooksAndMoviesAsync().then(results => {
    console.log("movies AND books", {
    movies: results.movies,
    books: result.books
    });
});

getBooksOrMoviesAsync()
  .then(results => {
    console.log("movies OR books", {
      results
    });
  })
  .catch(error =>
    console.error("Error in getBooksOrMoviesAsync execution", error)
  );



// export function fetchMovies(){
//     const resolveFunction = () => movies;

//     return fetchWithTimeout(1000).then(resolveFunction);
// }

// const moviePromise = fetchMovies();
// moviePromise.then(results => {console.log(results)})