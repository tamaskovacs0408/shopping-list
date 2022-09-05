import React from 'react'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons';

export default function List({items}) {
  return (
    <div className='shopping_list'>
      {items.map((item) => {
        const {id, title} = item;
        return <div key={id} className='list_item'>
          <p className='item_title'>{title}</p>
          <div className="btn_container">
            <button className='btn_edit'>
              <faFileEdit />
            </button>
            <button></button>
          </div>
        </div>
      })}
    </div>
  )
}
