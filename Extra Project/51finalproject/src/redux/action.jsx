import axios from 'axios';
import {
  setPopularMovies,
  setUpcomingMovies,
  setTopRatedMovies,
  setNowPlayingMovies,
} from './store';

const apiKey = '4e44d9029b1270a757cddc766a1bcb63';

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`);
    dispatch(setPopularMovies(response.data.results));
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`);
    dispatch(setUpcomingMovies(response.data.results));
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
  }
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`);
    dispatch(setTopRatedMovies(response.data.results));
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
  }
};

export const fetchNowPlayingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`);
    dispatch(setNowPlayingMovies(response.data.results));
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
  }
};
