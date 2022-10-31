import React, { Component } from 'react'

export class ListAsIndexChild extends Component {
  render() {
    const { name } = this.props.user
    return (
      <div>
        <label>{name}</label>
        <div>
          <input type="text" />
        </div>
      </div>
    )
  }
}

export default ListAsIndexChild
