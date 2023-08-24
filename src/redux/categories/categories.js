const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = '';

export const checkAction = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default checkReducer;
