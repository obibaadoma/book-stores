import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Nav from './components/nav';
import Book from './components/Book';
import Categories from './components/Categories';
import { getBook } from './feature/redux/books/bookSlice';

function App() {
  const { isLoading, isError } = useSelector((state) => state.Book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  if (isError) {
    return (
      <h2 className="error">Could not Load Books!!</h2>
    );
  }
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
