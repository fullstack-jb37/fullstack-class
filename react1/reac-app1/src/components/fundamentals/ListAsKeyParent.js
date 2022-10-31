import React, { Component } from 'react'
import ListAsIndexChild from './ListAsIndexChild'

export class ListAsKeyParent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        { name: 'Amir', id: 1663001318 },
        { name: 'Shalom', id: 1663001326 },
      ],
    }
  }

  addItem() {
    const id = +new Date()
    this.setState({
      list: [{ name: 'Tomer' + id, id }, ...this.state.list],
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addItem()}>Add item</button>
        <h2>Index as key</h2>
        <form>
          {this.state.list.map((user) => (
            <ListAsIndexChild user={user} key={user.id} />
          ))}
        </form>
      </div>
    )
  }
}

export default ListAsKeyParent
