import React from 'react';
import { v4 as uuid4 } from 'uuid';
import ContentBook from './ContentBook';
import BookForm from './BookForm';

const BookList = () => {
  const books = [
    {
      title: 'the gods are not to blame',
      author: 'Ola Rotimi',
      completed: true,
      id: uuid4(),
    },
    {
      title: 'The marriage of anansewa',
      author: 'ama ataa aidoo',
      completed: true,
      id: uuid4(),
    },
    {
      title: 'ancestral sacrifice',
      author: 'akosombo nyantakyi',
      completed: true,
      id: uuid4(),
    },
  ];

  return (
    <div>
      <ul>
        {books.map((book) => (
          <ContentBook
            title={book.title}
            author={book.author}
            key={book.id}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookList;
