import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavForm from './components/NavForm';
import Api from './components/Api';


function App() {
  return (
    <div className="App">
      <NavForm/>
      <Routes>
        <Route path='/api/:filter/:id' element={<Api/>}/>
      </Routes>
    </div>
  );
}

export default App;
