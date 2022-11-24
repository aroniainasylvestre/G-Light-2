import axios from "axios";

const API = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        "Content-Type": "application/json",
    },
});

const API_KEY = process.env.REACT_APP_API_KEY;

const searchMovie = async (query: string) => {
    const response = await API.get(
        `search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
};

const getMovieDetail = async (id: number) => {
    const response = await API.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
};

const getPopularMovies = async () => {
    const response = await API.get(`movie/popular?api_key=${API_KEY}`);
    return response.data.results;
};

const getTopRatedMovies = async () => {
    const response = await API.get(`movie/top_rated?api_key=${API_KEY}`);
    return response.data.results;
};

const getMoviesbyGenre = async (genre: number) => {
    const response = await API.get(
        `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre}`
    );
    return response.data.results;
};

const getUpcomingMovies = async () => {
    const response = await API.get(
        `movie/upcoming?api_key=${API_KEY}&sort_by=release_date`
    );
    return response.data.results;
};

const movieService = {
    searchMovie,
    getMovieDetail,
    getTopRatedMovies,
    getPopularMovies,
    getMoviesbyGenre,
    getUpcomingMovies,
};

export default movieService;
