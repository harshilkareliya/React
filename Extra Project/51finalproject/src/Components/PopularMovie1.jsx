import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Movie.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function PopularMovie1() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchMovies();
  }, []);

  function date(d) {
    return d.substring(0, 4)
  }

  function movieType(id) {
    switch (id) {
      case 28: return 'Action'
        break;
      case 12: return 'Adventure'
        break;
      case 16: return 'Animation'
        break;
      case 35: return 'Comedy'
        break;
      case 80: return 'Crime '
        break;
      case 99: return 'Documentary'
        break;
      default: return 'Movie'
    }
  }

  return (
    <div className='swiper'>
      <h4>Popular Movies</h4>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        loop={false}
        slidesPerGroup={5}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map(movie => (
          <SwiperSlide>
            <div key={movie.id} className='swiper-slide'  >
              <div className='swiperImg'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className=''
                />
              </div>
              <div className='swiperText'>
                <button className='watchNow'>Watch Now</button>
                <button className='add'>+</button>
                <h5>{date(movie.release_date)} • {movieType(movie.genre_ids[0])}</h5>
                <p>{movie.overview}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PopularMovie1
