import React, { useState } from 'react'

export default function ColorList() {
  const [colors, setColors] = useState([])
  const [color, setColor] = useState('')
  return (
    <div>
      <form>
        <div>
          <label>Add Color</label>
          <input
            type="text"
            value={color}
            onChange={(evt) => {
              setColor(evt.target.value)
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            value={'Add'}
            onClick={(evt) => {
              evt.preventDefault()
              setColors([...colors, color])
            }}
          />
        </div>
      </form>
      <hr />
      <h4>Color</h4>
      {color}
      <h4>Colors List</h4>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  )
}
