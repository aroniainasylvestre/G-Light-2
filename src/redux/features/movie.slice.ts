import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "../../api/movie.api";
import { IMovieState } from "../../interfaces/movie";

const initialState: IMovieState = {
    movie: null,
    movies: [],
    topRatedMovies: [],
    popularMovies: [],
    newMovies: [],
};

// Get top rated movies
export const getTopRatedMovies = createAsyncThunk(
    "movie/top_rated",
    async (_, thunkAPI) => {
        try {
            return await movieService.getTopRatedMovies();
        } catch (error: any) {
            const message = error.response || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get Upcoming movies
export const getUpcomingMovies = createAsyncThunk(
    "movie/latest",
    async (_, thunkAPI) => {
        try {
            return await movieService.getUpcomingMovies();
        } catch (error: any) {
            const message = error.response || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get popular movies
export const getPopularMovies = createAsyncThunk(
    "movie/popular",
    async (_, thunkAPI) => {
        try {
            return await movieService.getPopularMovies();
        } catch (error: any) {
            const message = error.response || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get movies by genre
export const getMovieByGenre = createAsyncThunk(
    "movie/genre",
    async (genre: number, thunkAPI) => {
        try {
            return await movieService.getMoviesbyGenre(genre);
        } catch (error: any) {
            const message = error.response || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Search movies
export const searchMovie = createAsyncThunk(
    "movie/search",
    async (query: string, thunkAPI) => {
        try {
            return await movieService.searchMovie(query);
        } catch (error: any) {
            const message = error.response || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get movie detail
export const getMovieDetail = createAsyncThunk(
    "movie/detail",
    async (id: number, thunkAPI) => {
        try {
            return await movieService.getMovieDetail(id);
        } catch (error: any) {
            const message = error.response || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                state.topRatedMovies = action.payload;
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.popularMovies = action.payload;
            })
            .addCase(getUpcomingMovies.fulfilled, (state, action) => {
                state.newMovies = action.payload;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(getMovieByGenre.fulfilled, (state, action) => {
                state.movies = action.payload;
            });
    },
});

export default movieSlice.reducer;
