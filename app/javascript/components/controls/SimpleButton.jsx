import React, { PureComponent } from 'react'

export default class SimpleButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    return (
      <div className="SimpleButton" onClick={handleClick}>
        <span>{text}</span>
      </div>
    )
  }
}
