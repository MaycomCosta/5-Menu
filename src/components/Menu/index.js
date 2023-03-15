import React from 'react'
import * as C from './styles'

function Menu ({ items }) {
  return (
    <C.SectionCenter>
      {items.map((menuItem) => {
        const {id, title, img, desc, price } = menuItem
        return (
          <C.MenuItem key={id}>
            <img src={img} alt={title}/>
            <div>
              <C.Header>
                <h4>{title}</h4>
                <C.Price>{price}</C.Price>
              </C.Header>
              <p>{desc}</p>
            </div>
          </C.MenuItem>
        )
      })}
    </C.SectionCenter>
  )
}

export default Menu
