import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Categories from './components/Categories';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { fetchBooks } from './redux/books/booksSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <BookList />
        <BookForm />
      </div>
    </Router>
  );
}

export default App;
