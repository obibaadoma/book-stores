import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from './redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookk = (e) => {
    e.preventDefault();
    if (title.trim() || author.trim()) {
      const payload = {
        item_id: uuid4(),
        title,
        author,
        category: 'Fiction',

      };
      dispatch(addBook(payload));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <section className="addbook-section">
      <h2 className="add-book">ADD NEW BOOK</h2>
      <form onSubmit={addBookk}>
        <input type="text" placeholder="Add title" className="input-title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} required />
        <input type="text" placeholder="Add author" className="input-author" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} required />
        <button type="submit" className="add-btn">ADD BOOK</button>
      </form>
    </section>
  );
};

export default BookForm;
