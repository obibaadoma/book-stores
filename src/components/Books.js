import React from 'react';
import { useSelector } from 'react-redux';
import ContentBook from './ContentBook';
import BookForm from './BookForm';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <ContentBook
            book={book}
            key={book.item_id}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookList;
