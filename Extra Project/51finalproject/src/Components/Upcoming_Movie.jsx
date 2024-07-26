import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Movie.css'; // Import the CSS file

function UpcomingMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

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
        centerPadding: "10px"
    };

    return (
        <div>
            <h4>Upcoming Movies</h4>
            <Slider {...settings}>
                {movies.map(movie => (
                    <div key={movie.id} className="movie-slide">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '-5px',height:'50px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '-5px' }}
            onClick={onClick}
        />
    );
}

export default UpcomingMovie;
