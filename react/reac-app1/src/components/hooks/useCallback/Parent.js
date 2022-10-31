import React, { useCallback } from 'react'
import Child from './Child'

function Parent({ title, releaseDate, views }) {
  const generateAction = useCallback(
    () => `Do some actions with ${title} and ${releaseDate}`,
    [title, releaseDate]
  )

  return (
    <div>
      <Child
        title={title}
        releaseDate={releaseDate}
        generateAction={generateAction}
      />
      <div>Views {views}</div>
    </div>
  )
}

export default Parent
