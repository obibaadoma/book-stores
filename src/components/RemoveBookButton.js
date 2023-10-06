import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const RemoveBookButton = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <button type="button" onClick={handleRemoveBook}>
      Remove Book
    </button>
  );
};

RemoveBookButton.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default RemoveBookButton;
