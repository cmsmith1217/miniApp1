import React, { useState, useEffect } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);
    const url = "http://localhost:3001/movies";
    // const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

    useEffect(() => {
        const fetchMovies = async () => {
            await fetch(url)
            .then((response) => response.json())
            .then((movieData) => setMovies(movieData))
            .then((log) => console.log(movies))
        }
        console.log('movies:', movies)
        fetchMovies();
        
    },[])

    if(movies.length > 0) {return (
        <>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                <li>{movie.name}: {movie.description}</li>
                ))}
            </ul>
        </>
    )}
}

export default Movies;