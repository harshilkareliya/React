import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

// Define initial state
const initialState = {
  popularMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  nowPlayingMovies: [],
};

// Define action types
const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';
const SET_UPCOMING_MOVIES = 'SET_UPCOMING_MOVIES';
const SET_TOP_RATED_MOVIES = 'SET_TOP_RATED_MOVIES';
const SET_NOW_PLAYING_MOVIES = 'SET_NOW_PLAYING_MOVIES';

// Define actions
export const setPopularMovies = (movies) => ({
  type: SET_POPULAR_MOVIES,
  payload: movies,
});

export const setUpcomingMovies = (movies) => ({
  type: SET_UPCOMING_MOVIES,
  payload: movies,
});

export const setTopRatedMovies = (movies) => ({
  type: SET_TOP_RATED_MOVIES,
  payload: movies,
});

export const setNowPlayingMovies = (movies) => ({
  type: SET_NOW_PLAYING_MOVIES,
  payload: movies,
});

// Define reducers
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return { ...state, popularMovies: action.payload };
    case SET_UPCOMING_MOVIES:
      return { ...state, upcomingMovies: action.payload };
    case SET_TOP_RATED_MOVIES:
      return { ...state, topRatedMovies: action.payload };
    case SET_NOW_PLAYING_MOVIES:
      return { ...state, nowPlayingMovies: action.payload };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  movies: moviesReducer,
});

// Create store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
