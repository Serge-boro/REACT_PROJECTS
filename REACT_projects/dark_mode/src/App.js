import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageItem = () => {
  let item = 'light-theme'
  if (localStorage.getItem('theme')) {
    item = localStorage.getItem('theme')
  }
  return item
}
function App() {
  const [theme, setTheme] = useState(getStorageItem)

  const getToggleItem = () => {
    theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
  }

  useEffect(() => {
    document.documentElement.classList = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Notes a weird writer</h1>
          <button className='btn' onClick={getToggleItem}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
