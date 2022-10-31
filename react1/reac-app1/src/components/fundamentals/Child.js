import React, { Component } from 'react'

export class Child extends Component {
  render() {
    const { cb } = this.props
    return (
      <div>
        <button onClick={() => cb('Child')}>Greet from child</button>
      </div>
    )
  }
}

export default Child
