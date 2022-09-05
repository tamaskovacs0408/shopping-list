import React from 'react'

export default function List({items}) {
  return (
    <div className='shopping_list'>
      {items.map((item) => {
        const {id, title} = item;
        return <div key={id} className='list_item'>
          <p className='item_title'>{title}</p>
        </div>
      })}
    </div>
  )
}
