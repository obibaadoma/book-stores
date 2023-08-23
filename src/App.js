import { Routes, Route } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
