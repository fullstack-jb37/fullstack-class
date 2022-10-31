import React, { Component } from 'react'

export class ClassComponent extends Component {
  render() {
    const { firstName, lastName, children } = this.props
    return (
      <div>
        <h1 style={{ color: 'aquamarine' }}>Hello World And Oron</h1>

        <h2>
          Hello {firstName} {lastName}
        </h2>
        {children}
      </div>
    )
  }
}

export default ClassComponent
