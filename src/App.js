import "./App.css";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import List from "./Component/List/List";
import Info from "./Component/Info/Info";

function App() {
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [updateID, setUpdateID] = useState(null);
  const [info, setInfo] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!listItem) {
      // display info
    } else if(listItem & update) {
      // edit the item
    } else {
      // add item to list
      const newItem = {id: uuid(), title: listItem};
      setList([...list, newItem]);
      setListItem('')
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
            value={listItem}
            onChange={(e) => setListItem(e.target.value)}
          />
          <button type="submit" className="btn_submit">
            {update ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="list_container">
        <List items={list}/>
        <button className="btn_clear">Clear list</button>
      </div>
    </div>
  );
}

export default App;
