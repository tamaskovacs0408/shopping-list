import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function List({ items, deleteItem, updateItem }) {
  return (
    <div className="shopping_list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="list_item">
            <p className="item_title">{title}</p>
            <div className="btn_container">
              <button className="btn_edit">
                <FontAwesomeIcon icon={faEdit} onClick={() => updateItem(id)} />
              </button>
              <button className="btn_delete">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => deleteItem(id)}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
