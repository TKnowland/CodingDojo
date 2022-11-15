import './App.css';
import Home from './views/Home';
import About from './views/About';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about' />
      </Routes>
    </div>
  );
}

export default App;
