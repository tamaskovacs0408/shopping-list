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

    if (!listItem) {
      showInfo(true, "red", "Type Something");
    } else if (listItem & update) {
      // edit the item
    } else {
      showInfo(true, "green", "Item added");
      const newItem = { id: uuid(), title: listItem };
      setList([...list, newItem]);
      setListItem("");
    }
  };

  const showInfo = (show = false, type = "", msg = "") => {
    setInfo({ show, type, msg });
  };
  const clearList = () => {
    showInfo(true, 'red', 'List Cleared');
    setList([]);
  }
  const deleteItem = (id) => {
    showInfo(true, 'red', 'Item Deleted');
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div className="App">
        <form className="item_form" onSubmit={handleSubmit}>
          <div className="info_container">
            {info.show && <Info {...info} removeInfo={showInfo} />}
          </div>
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
        {list.length > 0 && (
          <div className="list_container">
            <List items={list} deleteItem={deleteItem}/>
            <button className="btn_clear" onClick={clearList}>Clear list</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
