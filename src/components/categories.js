import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import NavBar from './NavBar';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesState = useSelector((state) => state.categories);
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <NavBar />
      <button
        type="button"
        onClick={handleStatus}
      >
        Check status
      </button>
      <h1>
        {categoriesState}
      </h1>
    </>
  );
};

export default Categories;
