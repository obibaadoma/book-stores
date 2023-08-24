import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import '../stylesheets/Books.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books">
      <div className="container">
        {books.map((book) => (
          <Book key={book.item_id} id={book.item_id} name={book.title} author={book.author} />
        ))}
      </div>
      <div className="form">
        <h2>ADD NEW BOOK</h2>
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
