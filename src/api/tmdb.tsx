import { useEffect, useState } from "react";
import type { Movie } from "../types/index";

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

function MovieComponent() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        async function fetchMovies() {
            try {
                const response = await fetch (`${BASE_URL}/movie/popular`, 
                    { headers : { 'Authorization': `Bearer ${ACCESS_TOKEN}`, 'Content-Type': 'application/json'}});

                    if(!response.ok) throw new Error("Failed to fetch");

                    const movies = await response.json();
                    setMovies(movies.results);
                } catch(err) {
                    setError(err.message);
                } finally {
                    setLoading(false); 
            }
        }
        fetchMovies();
    }, []);

    if(loading) return <div> loading.... </div>;
    if(error) return <div>Error: {error}</div>;
    

    return (
        <div>
            {movies.map(movie => (<div key = {movie.id}>{movie.title}</div>))}
        </div>
    );
}

export default MovieComponent;