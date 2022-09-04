import './App.css';
import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import List from './Component/List/List';
import Info from './Component/Info/Info';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [updateID, setUpdateID] = useState(null);
  const [info, setInfo] = useState({});

  return (
    <div className="App">
      <h1>Shopping list</h1>
    </div>
  );
}

export default App;
