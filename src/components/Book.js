import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(book.item_id));
  };

  return (

    <div id="book">
      <div>
        <p className="gender">{book.category}</p>
        <h2 className="title">{book.title}</h2>
        <p className="author">{book.author}</p>
        <div className="actions">
          <button type="button" className="action">
            Comments
          </button>
          <div className="vertical-separator" />
          <button className="action" type="button" onClick={handleRemove}>Remove</button>
          <div className="vertical-separator" />
          <button className="action" type="button">
            Edit
          </button>

        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div>
          <p className="percent-complete">
            {book.progress || 50}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">Chapter 17</p>
          <button className="primary-button" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    progress: PropTypes.number,
  }).isRequired,
};

export default Book;
