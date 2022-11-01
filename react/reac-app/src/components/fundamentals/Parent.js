import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello from me!',
    }
  }

  greetHandler(from) {
    this.setState({
      message: `Hello from ${from}`,
    })
  }

  render() {
    return (
      <div>
        <Child cb={this.greetHandler.bind(this)} />
        <button
          onClick={() => {
            this.greetHandler('Parent')
          }}
        >
          Greet from father
        </button>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default Parent
