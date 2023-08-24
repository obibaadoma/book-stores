import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from './redux/categories/categories';

const CategoryPage = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };

  return (
    <div>
      <h1>{categories}</h1>
      <button type="submit" className="status-button" onClick={handleSubmit}>Check Status</button>
    </div>
  );
};

export default CategoryPage;
