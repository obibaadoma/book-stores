// define the action type
const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

// Initial state
const initialState = { categories: [] };

// Action creator
export const checkedStatus = () => (
  { type: CHECKED_STATUS }
);

// Reducer
const categoryReducer = (state = initialState, action) => {
  if (action.type === CHECKED_STATUS) {
    return 'under construction';
  }

  return state;
};

export default categoryReducer;
