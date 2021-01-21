import * as service from './services';

let movies = require('./data/movies.json');


export function fetchMovies(){
    const resolveFunction = () => movies;

    service.fetchWithTimeout(1000).then(resolveFunction);
}

let moviePromise = fetchMovies();
moviePromise.then(function resolved(results){console.log(results)})