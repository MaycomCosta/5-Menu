import React, { useState } from "react"
import * as C from './styles.js'
import items from './data/data'
import Categories from './components/Categories'
import Menu from './components/Menu'
const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  // eslint-disable-next-line
  const [menuItems, setMenuItems] = useState(items)
  const [categories] = useState(allCategories)


  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <C.Main>
      <C.Section>
        <C.Title>
        <h2>menu</h2>
        <div></div>
        </C.Title>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </C.Section>
    </C.Main>
  )
}

export default App
