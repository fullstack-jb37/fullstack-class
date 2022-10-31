import React, { Component } from 'react'

export class ConditionalElementContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
    }
  }

  clickHandler() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickHandler()}>Click</button>
        <div>{this.state.toggle ? 'Hello FS' : 'Hello World!'}</div>
      </div>
    )
  }
}

export default ConditionalElementContent
