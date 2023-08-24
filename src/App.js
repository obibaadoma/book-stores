import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './components/redux/books/books';
import BookList from './components/BookList';
import Navigation from './components/NavBar';
import CategoryPage from './components/Category';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchBooks());
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
