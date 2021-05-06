import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import data from './data'

const filterAllItems = ['all', ...new Set(data.map((item) => item.category))]
function App() {
  const [menu, setMenu] = useState(data)
  const [category, setCategory] = useState(filterAllItems)

  const filterBtn = (category) => {
    const filterBtn = data.filter((item) => item.category === category)
    setMenu(filterBtn)
    if ('all' === category) {
      setMenu(data)
    }
  }

  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h1>our menu</h1>
          <div className='underline'></div>
        </div>
        <Categories allBtn={category} filterBtn={filterBtn} />
        <Menu ItemMenu={menu} />
      </section>
    </main>
  )
}

export default App
