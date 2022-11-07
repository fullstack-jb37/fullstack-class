import React, { Component } from 'react'
import btnStyle from './css/button.module.css'

export class Button extends Component {
  render() {
    const { type, content } = this.props
    return <button className={btnStyle[type]}>{content}</button>
  }
}

export default Button
