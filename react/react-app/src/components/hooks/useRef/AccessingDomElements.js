import React, { useEffect, useRef, useState } from 'react'

function AccessingDomElements() {
  const [name, setName] = useState('')

  //   const inputRef = useRef(null)
  useEffect(() => {
    const inputName = document.getElementById('name')
    inputName.focus()
    // inputRef.current.focus()
  })
  return (
    <div>
      <input
        id="name"
        // ref={inputRef}
        value={name}
        onChange={(eventos) => setName(eventos.target.value)}
      />
      <div>Current State: {name}</div>
    </div>
  )
}

export default AccessingDomElements
