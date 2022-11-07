import React, { Component } from 'react'

export class States extends Component {
  constructor() {
    super()

    this.state = { message: 'Hello World!', prop: 'Another' }
    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    this.setState({ etreterterterter: 'Hello FS!' })
  }

  render() {
    return (
      <div>
        {this.state.message}
        <br></br>
        {this.state.prop}
        <br></br>
        {this.state.etreterterterter}
        <button onClick={this.changeState}>click</button>
      </div>
    )
  }
}

export default States
