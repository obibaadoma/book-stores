// define the action type
const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const REMOVE_BOOKS = 'bookstore/books/REMOVE_BOOKS';

// initial state
const initialState = {
  books: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

//  the action type to define the action creator

export const addBookAction = (newBook) => (
  { type: ADD_BOOKS, newBook }
);
export const removeBookAction = (id) => (
  { type: REMOVE_BOOKS, id }
);

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        booksArray: [...state.booksArray, action],
      };

    case REMOVE_BOOKS:
      return {
        booksArray: [...state.booksArray.filter((book) => book.item_id !== action.item_id)],
      };
    default:
      return state;
  }
};

export default booksReducer;