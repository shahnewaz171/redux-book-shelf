import { createSlice } from '@reduxjs/toolkit'
import allBooks from '../../fakeData/books.json';

const initialState = {
    readingList: [],
    discoverList: allBooks,
    finishedList: []
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBookToReadingList: (state, action) => {
            state.readingList = [...state.readingList, action.payload];
        },
        removeBookFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.id !== action.payload.id);
            state.finishedList = [...state.finishedList, action.payload];
        }
    }
});

export const { addBookToReadingList, removeBookFromReadingList } = bookSlice.actions;
export default bookSlice.reducer;