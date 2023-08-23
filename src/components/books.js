import React from 'react';
import Book from './book';
import InputBook from './InputBook';
import NavBar from './NavBar';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="books-wrapper">
        <NavBar />
        <ul>
          <Book />
        </ul>

        <InputBook />

      </div>
    );
  }
}

export default Books;
