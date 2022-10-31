import React, { Component } from 'react'

export class PrevState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  changeState() {
    // console.log(++this.state.count)
    // this.setState({ count: this.state.count + 1 })
    for (let i = 0; i < 5; i++) {
      this.setState(
        // { count: this.state.count + 1 },
        (prevState) => ({
          count: prevState.count + 1,
        }),
        () => {
          console.log(this.state.count)
        }
      )
      console.log(this.state.count)
    }
  }

  render() {
    console.log('object')
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.changeState()
          }}
        >
          increment
        </button>
      </div>
    )
  }
}

export default PrevState
