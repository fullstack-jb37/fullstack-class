import React from 'react'
import MemoChild from './MemoChild'
import MemoChildWithMemoized from './MemoChildWithMemoized'

function MemoParent({ title, releaseDate, views }) {
  return (
    <div>
      <MemoChild title={title} releaseDate={releaseDate} />
      <MemoChildWithMemoized title={title} releaseDate={releaseDate} />
      <div>Views {views}</div>
    </div>
  )
}

export default MemoParent
