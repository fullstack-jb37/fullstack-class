import React, { Component } from 'react'

export class ListRenderingChild extends Component {
  render() {
    const { first_name, last_name, email } = this.props.user
    return (
      <div>
        Full Name: {first_name} {last_name} <br></br> Email: {email} <br></br>
        <br></br>
      </div>
    )
  }
}

export default ListRenderingChild
