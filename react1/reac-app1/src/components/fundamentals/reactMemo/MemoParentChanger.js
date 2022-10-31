import React, { Component } from 'react'
import MemoParent from './MemoParent'
export class MemoParentChanger extends Component {
  constructor() {
    super()
    this.state = { views: 0 }
  }

  changeState() {
    this.setState({
      views: this.state.views + 1,
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Increase Viewers</button>
        <MemoParent
          views={this.state.views}
          title={'Avengers'}
          releaseDate={'2012'}
        />
      </div>
    )
  }
}

export default MemoParentChanger
