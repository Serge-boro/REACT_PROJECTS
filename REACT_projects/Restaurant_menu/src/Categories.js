import React from 'react'

const Categories = ({ allBtn, filterBtn }) => {
  return (
    <div className='btn-container'>
      {allBtn.map((item, idx) => {
        return (
          <button
            key={idx}
            className='filter-btn'
            onClick={() => filterBtn(item)}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
