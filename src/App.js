import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </React.StrictMode>
);

export default App;
