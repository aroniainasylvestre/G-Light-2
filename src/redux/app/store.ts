import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie.slice";
import wishlistReducer from "../features/wishlist.slice";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        wishlist: wishlistReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
