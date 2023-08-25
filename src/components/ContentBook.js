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
    <li className="eachbook">
      <div className="book">
        <div className="book-headers">
          <h4 className="category">{book.category}</h4>
          <h2 className="title">{book.title}</h2>
          <p className="author">{book.author}</p>
        </div>
        <div className="buttons">
          <span><button type="button">Comments</button></span>
          {' '}
          <hr />
          <span><button type="button" onClick={handleSubmit}>Remove</button></span>
          <hr />
          <span><button type="button">Edit</button></span>
        </div>
      </div>

      <div className="details">
        <div className="percentage-complete">
          <div className="completed-circle" />
          <div>
            <p className="t64">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <hr className="complete-line" />
        <div className="chapter-progress">
          <h4 className="current">CURRENT CHAPTER</h4>
          <h4 className="chapter">Chapter 17</h4>
          <button type="button" className="update">UPDATE PROGRESS</button>
        </div>
      </div>

    </li>

  );
};

ContentBook.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default ContentBook;
