import React, { useEffect, useRef, useState } from 'react'

function PersistingValues() {
  const [name, setName] = useState('')

  const prevName = useRef([])
  useEffect(() => {
    prevName.current.push(name)
  }, [name])
  return (
    <div>
      <input
        value={name}
        onChange={(eventos) => setName(eventos.target.value)}
      />
      <div>Current State: {name}</div>
      <div>Prev State: {JSON.stringify(prevName.current)}</div>
    </div>
  )
}

export default PersistingValues
