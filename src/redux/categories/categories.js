// Constatnts
const CHECK_STATUS = 'bookstore/src/redux/categories/checkStatus';

const initialState = [];

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

// reducers

export default function checkStatusReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Building in Progress';
    default:
      return state;
  }
}
