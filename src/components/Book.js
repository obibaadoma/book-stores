import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';
import { removeAction } from '../redux/books/books';

const img = require('../images/progress.png');

const Book = ({ id, name, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="bookInfo">
        <h4>Science Fiction</h4>
        <h2>{name}</h2>
        <p>{`Author: ${author}`}</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button onClick={() => dispatch(removeAction(id))} type="button">Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="bookProgress">
        <img src={img} alt="progressBar" />
        <div>
          <h2>80%</h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="bookChapter">
        <h4>CURRENT CHAPTER</h4>
        <p>Chapter 8</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

export default Book;
