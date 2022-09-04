import "./App.css";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import List from "./Component/List/List";
import Info from "./Component/Info/Info";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [updateID, setUpdateID] = useState(null);
  const [info, setInfo] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!item) {
      // display info
    } else if(item & update) {
      // edit the item
    } else {
      // add item to list
      const newItem = {id: uuid(), title: item};
      setList([...list, newItem]);
      setItem('')
    }
  };

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <form className="item_form" onSubmit={handleSubmit}>
        {info.show && <Info />}
        <div className="input_container">
          <input
            type="text"
            placeholder="Add your item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="btn_submit">
            {update ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="list_container">
        <List />
        <button className="btn_clear">Clear list</button>
      </div>
    </div>
  );
}

export default App;
