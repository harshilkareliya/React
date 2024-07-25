import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Movie.css'; // Import the CSS file

function PopularMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '4e44d9029b1270a757cddc766a1bcb63';
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

            try {
                const response = await axios.get(url);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchMovies();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: "center",
        centerPadding: "5px"
    };

    return (
        <>
            <div>
                <h4>Popular Movies</h4>
                <Slider {...settings}>
                    {movies.map(movie => (
                        <div key={movie.id} className="box">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-image"
                            />
                            <div className="overbox">
                                <button className="watch-now-button">Watch Now</button>
                                <h6 className="movie-title">{movie.title}</h6>
                                <p className='movie-overview'>{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                        {/* <div key={movie.id} className='box border border-2'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-image"
                            />
                            <div className="overbox border border-3">
                                <p className='p-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae nesciunt, minus dolore laborum repellendus dolor laboriosam vero quo veniam fugit, reiciendis asperiores recusandae! Impedit deleniti dolor similique autem ipsum!
                                </p>
                            </div>
                        </div> */}
            </div>

        </>

    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '5px', height: '50px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '5px', height: '50px' }}
            onClick={onClick}
        />
    );
}

export default PopularMovie;
