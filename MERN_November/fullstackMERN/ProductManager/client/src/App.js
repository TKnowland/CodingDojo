import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  const [products, setProducts] = useState([]);
  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id != productId))
  }


  return (
    <div className="App">
      <Routes>
        <Route element={<Main removeFromDom = {removeFromDom} products = {products} setProducts = {setProducts}/>} path='/products/' />
        <Route element={<Details removeFromDom = {removeFromDom}/>} path='/products/:id' />
        <Route element={<Update/>} path='/products/update/:id' />
      </Routes>
    </div>
  );
}

export default App;
