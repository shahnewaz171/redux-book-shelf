import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../allSlice/bookSlice";

export const store = configureStore({
    reducer: {
        books: bookSlice
    }
})