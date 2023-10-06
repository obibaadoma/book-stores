import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBookButton = ({ title, author }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = { title, author, id: Date.now() };
    dispatch(addBook(newBook));
  };

  return (
    <button type="button" onClick={handleAddBook}>
      Add Book
    </button>
  );
};

AddBookButton.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default AddBookButton;
