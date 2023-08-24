import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from './redux/books/books';

const ContentBook = ({ book }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(book.item_id));
  };

  return (
    <li>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="submit" onClick={handleSubmit}>Remove</button>
    </li>
  );
};

ContentBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default ContentBook;
