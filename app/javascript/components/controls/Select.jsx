import React, { PureComponent } from 'react'

import SimpleButton from './SimpleButton'

export default class Select extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleClick = (set) => {
    let list = document.getElementsByClassName('list')
    list = Array.from(list)
    list[0].classList.toggle('on')
  }
  render() {
    let { text, set } = this.props
    let buttonList = []
    Object.keys(set).forEach((button, i) => {
      buttonList.push(
        <SimpleButton text={button} handleClick={set[button]} key={i} />
      )
    })
    return (
      <div className="Select">
        <div
          className="current"
          onMouseOver={this.handleClick}
          onMouseOut={this.handleClick}
        >
          {text}
        </div>
        <div className="list">{buttonList}</div>
      </div>
    )
  }
}
