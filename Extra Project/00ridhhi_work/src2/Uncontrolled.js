import React, { useState } from "react";
//Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js
// import axios from "axios";

function Uncontrolled() {
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            let apiKey = '38ed9ceb';
            const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${query}`);
            const data = await response.json();
            if (data.Response === "True") {
                setMovie(data);
                setError(null);
            } else {
                setError("Movie not found. Please enter a valid movie title.");
            }
        } catch (error) {
            console.error("Error fetching movie:", error);
            setError("Error fetching movie. Please try again later.");
        }
        console.log(movie)
        // document.getElementById("showmovie").innerHTML = movie.Title
        // function movieShow(movie) {
        //     return (
        //         <>
        //             <h1>{movie.Title}</h1>
        //             <img src={movie.Poster} />
        //         </>
        //     )
        // }
    };


    return (
        <div className="movies_box d-flex flex-wrap align-items-center">
            {/* Your other JSX code */}
            <div>
                {movie && (
                    <div key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Plot}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                )}
                {error && <p>{error}</p>}
            </div>
            {/* Your other JSX code */}
            <div className="movies_box d-flex flex-wrap align-items-center">
                <div className="d-flex justify-content-between w-100 p-3">
                    <div>
                        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className="image" />
                    </div>
                    <div >
                        <button className="btn border">Sign In</button>
                    </div>
                </div>
                <div className="d-flex text-white m-auto" id="movie_search">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h3 className="pt-4 pb-2">Watch anywhere. Cancel anytime.</h3>
                    <h6>Ready to watch? Enter any movie Name</h6>
                    <input className="mt-3 mb-5 rounded rounded-2 text-white"
                        type="text"
                        placeholder="Search Movies..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn border mb-4" onClick={handleSearch}>Search</button>
                    {error && <p>{error}</p>}
                    <div id="showmovie">
                        {/* { movie && movie.map((mov) => (
                            <div key={mov.id}>
                                <h3>{mov.title}</h3>
                                <p>{mov.overview}</p>
                                <img src={'https://image.omdb.org/t/p/w500/${movie.poster_path'} alt={mov.title} />
                            </div>
                        ))} */}
                        {
                        //  <>
                        //             <h1>{movie.Title}</h1>
                        //              <img src={movie.Poster} />   
                        //  </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Uncontrolled;
