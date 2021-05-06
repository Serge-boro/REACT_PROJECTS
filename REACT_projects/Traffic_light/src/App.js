import React, { useState } from 'react'
import light from './data'
import light2 from './data2'
import SingleLight from './Light'
import SingleLight2 from './light2'
function App() {
  return (
    <main>
      {light.map((item) => {
        return <SingleLight key={item.id} {...item} />
      })}
      {light2.map((item) => {
        return <SingleLight2 key={item.id} {...item} />
      })}
    </main>
  )
}

export default App
