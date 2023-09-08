import React, { useState, useEffect } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [entryInputName, setEntryInputName] = useState('');
    const [entryInputDesc, setEntryInputDesc] = useState('');

    // const url = "http://localhost:3001/movies";
    // const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

    useEffect(() => {

        const url = searchName
            ? `http://localhost:3001/movies?name=${searchName}`
            : "http://localhost:3001/movies";

        const fetchMovies = async () => {
            console.log(url)
            await fetch(url)
            .then((response) => response.json())
            .then((movieData) => setMovies(movieData))
        }
        console.log('movies:', movies)
        fetchMovies();
        
    },[searchName])

    function reFetchMovies() {
        const fetchMovies = async () => {
            await fetch("http://localhost:3001/movies")
            .then((response) => response.json())
            .then((movieData) => setMovies(movieData))
        }
        fetchMovies();
    }

    //********** SEARCH FIELD FUNCTIONALITY  ***************//
    // const handleSearch = () => {
    //     onSearch(searchName);
    // };

    // const handleSearchSubmit = () => {
    //     movies.filter
    // }
    //*****************************************************//

    //************ ENTRY POST FUNCTIONALITY  **************//
    const newEntry = async () => {
        console.log('posting new entry')
        await fetch("http://localhost:3001/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": entryInputName,
                "haveWatched": true,
                "toWatch": false,
                "description": entryInputDesc
            })
        })
        reFetchMovies()
    }

    const deleteEntry = async (idArg) => {
        console.log('arg', idArg)
        console.log('deleting entry')
        await fetch(`http://localhost:3001/movies?id=${idArg}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        reFetchMovies()
    }
    // const handleSearchSubmit = () => {
    //     movies.filter
    // }
    //*****************************************************//


    if(movies) {return (
        <>
            <h1>Movies</h1>
            <input type='text' value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Search by name"/>
            <button>Search</button>
            <ul>
                {movies.map((movie) => (
                <div>
                    <li>{movie.name}: {movie.description}</li>
                    <button id={`haveWatchedToggle${movie.id}`} value={movie.haveWatched}>Toggle Watched</button>
                    <button id={`toWatchToggle${movie.id}`} value={movie.toWatch}>Toggle To Watch</button>
                    <button id={`Delete${movie.id}`} value={movie.id} onClick={(e) => {
                        deleteEntry(e.target.value);
                    }}>DELETE</button>
                </div>
                ))}
            </ul>

            <h3>Add a Movie or Show</h3>
            <input type='text' value={entryInputName} onChange={(e) => setEntryInputName(e.target.value)} placeholder="Movie/Show Name"/>
            <input type='text' value={entryInputDesc} onChange={(e) => setEntryInputDesc(e.target.value)} placeholder="Movie/Show Description"/>
            <button onClick={(e) => {
                e.preventDefault();
                newEntry();
            }}>Submit Entry</button>
        </>
    )}
}

export default Movies;