import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatus } from '../redux/categories/categoriesSlice';
import './Categories.css';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus());
  }, [dispatch]);

  return (
    <div className="categories">
      <h1>{status}</h1>
    </div>
  );
};

export default Categories;
