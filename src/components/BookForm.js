import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const categoryOptions = [
    { id: '1', value: 'Fiction' },
    { id: '2', value: 'Action' },
    { id: '3', value: 'Nonfiction' },
    { id: '4', value: 'Comedy' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      const newBook = {
        item_id: Date.now().toString(),
        title,
        author,
        category,
        progress: 0, // Progress inicial
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <section className="addBookForm">
      <div className="horizontal-divider" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="bookTitle">
          <input
            type="text"
            id="title-input"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="bookAuthor">
          <input
            type="text"
            id="author-input"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label htmlFor="bookCategory">
          <select
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categoryOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </label>

        <button className="primary-button-big" type="submit">Add Book</button>
      </form>
    </section>

  );
};

export default BookForm;
