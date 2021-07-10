import allBooks from '../../fakeData/books.json';

const initialState = {
    readingList: [],
    discoverList: allBooks,
    finishedList: []
}


const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_READING_LIST': {
            return state 
        }
        case 'REMOVE_FROM_READING_LIST': {
            return state 
        }
        default: {
           return state
        }
    }
}

export default bookReducer;