import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

const wishlist: IMovie[] = JSON.parse(
    localStorage.getItem("wishlist") as string
);

const initialState = {
    wishlist: wishlist ? wishlist : [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        /**
         *  add movie to wishlist
         */
        addMovie(state, action) {
            const newItemId = action.payload.id;
            const existingMovie = state.wishlist.find(
                (item: IMovie) => item.id === newItemId
            );

            if (existingMovie) {
                return;
            } else {
                state.wishlist.push(action.payload);
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },

        /**
         *  remove movie in wishlist by id
         */
        removeMovie(state, action) {
            state.wishlist = state.wishlist.filter(
                (item: any) => item.id !== action.payload
            );
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
    },
});

export const { addMovie, removeMovie } = wishlistSlice.actions;
export default wishlistSlice.reducer;
