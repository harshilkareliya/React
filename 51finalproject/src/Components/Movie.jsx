import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '4e44d9029b1270a757cddc766a1bcb63';
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

            try {
                const response = await axios.get(url);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching data : ", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map(movie => (
                    <div key={movie.id} style={{ margin: '10px', width: '200px' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '100%' }}
                        />
                        <h3>{movie.title}</h3>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movie;
