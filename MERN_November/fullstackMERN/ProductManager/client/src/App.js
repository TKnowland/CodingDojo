import './App.css';
import { Routes, Route } from 'react-router-dom'
import CreateProduct from './views/CreateProduct';
import Detail from './views/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<CreateProduct/>} path='/products/' />
        <Route element={<Detail/>} path='/products/:id' />
      </Routes>
    </div>
  );
}

export default App;
