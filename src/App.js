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
  const [info, setInfo] = useState({show: false, msg: '', type: ''});

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <form className='item_form' onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value='Add'/>
      </form>
      <div className="list_container">
        <List />
        <button className='btn_clear'>Clear list</button>
      </div>
    </div>
  );
}

export default App;
