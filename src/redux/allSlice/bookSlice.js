import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import allBooks from '../../fakeData/books.json';

export const loadBooksAsync = createAsyncThunk(
    'books/loadBooks',
    async () => {
        return allBooks;
    }
)

const bookSlice = createSlice({
    name: "books",
    initialState: {
        readingList: [],
        discoverList: [],
        finishedList: []
    },
    reducers: {
        addBookToReadingList: (state, action) => {
            state.readingList = [...state.readingList, action.payload];
        },
        removeBookFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.id !== action.payload.id);
            state.finishedList = [...state.finishedList, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadBooksAsync.fulfilled, (state, action) => {
            state.discoverList = action.payload;
        })
      }
});

export const { addBookToReadingList, removeBookFromReadingList } = bookSlice.actions;
export default bookSlice.reducer;