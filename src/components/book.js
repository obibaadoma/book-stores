import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  // const { books } = this.props;
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  const books = useSelector((state) => state.books);

  return (
    <>

      { books.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          {book.author}
          {' '}
          <button type="button" onClick={() => handleRemove(book.id)}>Remove</button>
        </li>
      ))}

    </>
  );
};

Book.defaultProps = {
  books: [],
};

/* Book.propTypes = {
  books: Number,
}; */

export default Book;
