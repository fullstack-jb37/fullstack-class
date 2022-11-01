import React from 'react'

function FunctionalComponent({ firstName, lastName, children }) {
  const idForHtml = 'greet-id'
  const classForHtml = 'greet-class'
  return (
    <div id={idForHtml} className={classForHtml}>
      <h1 style={{ color: 'aquamarine' }}>Hello World And Oron</h1>

      <h2>
        Hello {firstName} {lastName}
      </h2>
      {children}
    </div>
  )
}

export default FunctionalComponent
