import "./App.css";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import List from "./Component/List/List";
import Info from "./Component/Info/Info";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [update, setUpdate] = useState(false);
  const [updateID, setUpdateID] = useState(null);
  const [info, setInfo] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!listItem) {
      showInfo(true, "red", "Type Something");
    } else if (listItem && update) {
      setList(
        list.map((item) => {
          if (item.id === updateID) {
            return { ...item, title: listItem };
          }
          return item;
        })
      );
      setListItem("");
      setUpdateID(null);
      setUpdate(false);
      showInfo(true, "green", "Item Updated");
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
    showInfo(true, "red", "List Cleared");
    setList([]);
  };
  const deleteItem = (id) => {
    showInfo(true, "red", "Item Deleted");
    setList(list.filter((item) => item.id !== id));
  };
  const updateItem = (id) => {
    const specItem = list.find((item) => item.id === id);
    setUpdate(true);
    setUpdateID(id);
    setListItem(specItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="App">
        <div className="info_container">
          {info.show && <Info {...info} removeInfo={showInfo} list={list} />}
        </div>
        <form className="item_form" onSubmit={handleSubmit}>
          <h1>Shopping List</h1>
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
            <List
              items={list}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
            <button className="btn_clear" onClick={clearList}>
              Clear list
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
