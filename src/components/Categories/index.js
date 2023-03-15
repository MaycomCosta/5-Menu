import React from 'react'
import * as C from './styles'


function Categories ({ categories,filterItems }) {

  return (
    <C.ButtonContainer>
      {categories.map((category, index) => {
        return (
          <C.FilterButton
          type='button'
          key={index}
          onClick={() => filterItems(category)}
          >
          {category}
          </C.FilterButton>
        )
      })}
    </C.ButtonContainer>
  )
}

export default Categories
