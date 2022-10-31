import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
  const [name, setName] = useState('')
  /////
  const [count, setCount] = useState(0)
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1)
    }
  }
  /////
  useEffect(() => {
    console.log('use effect in action!')
    document.title = 'react app with ' + name
  }, [name])

  return (
    <div>
      <button onClick={() => incrementFive()}>Increment</button>
      <br></br>
      {count}
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value)
            }}
          />
        </div>
      </form>
      {name}
    </div>
  )
}

export default UseEffectHook
