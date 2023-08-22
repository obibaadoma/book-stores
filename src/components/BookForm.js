import React from 'react';

const BookForm = () => {
  const title = 'ADD NEW BOOK';
  return (
    <section>
      <h2>{title}</h2>
      <form>
        <input type="text" placeholder="Add title" className="input-text" name="title" />
        <input type="text" placeholder="Add author" className="input-text" name="author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default BookForm;
