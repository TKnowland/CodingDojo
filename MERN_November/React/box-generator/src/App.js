import React, {useState} from 'react';
import './App.css';
import Form from './components/form';

function App() {
  const [boxes, setBoxes] = useState([]);
  

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };


  return (
    <div className="App">
      <Form boxes={boxes} addBox = {addBox}/>
    </div>
  );
}

export default App;
