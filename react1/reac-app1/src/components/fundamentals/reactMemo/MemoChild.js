import React from 'react'

function MemoChild({ title, releaseDate }) {
  console.log('child renders')
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  )
}

export default MemoChild
