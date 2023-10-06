import React from 'react';
import PropTypes from 'prop-types';

const ContentBook = ({ title, author }) => (
  <li>
    <h3>{title}</h3>
    <p>{author}</p>
    <button type="button">Delete</button>
  </li>
);
ContentBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ContentBook;
