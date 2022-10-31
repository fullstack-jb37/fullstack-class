import React, { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({ name: '', age: '' })
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1)
    }
  }
  return (
    <div>
      <button onClick={() => incrementFive()}>Increment</button>
      <br></br>
      {count}
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={person.name}
              onChange={(evt) => {
                setPerson({ ...person, name: evt.target.value })
              }}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              min={0}
              value={person.age}
              onChange={(evt) => {
                setPerson({ ...person, age: evt.target.value })
              }}
            />
          </div>
        </form>
      </div>
      {person.name}
      <br></br>
      {person.age}
    </div>
  )
}

export default UseStateHook
