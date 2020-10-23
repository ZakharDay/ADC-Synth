import React, { PureComponent } from 'react'

export default class AddButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, size, handleClick } = this.props

    return (
      <div className={'AddButton' + size} onClick={handleClick}>
        <div className={'AddButton' + size + 'Circle'}>
          <div className={'AddButton' + size + 'Plus'}></div>
        </div>

        <span>{text}</span>
      </div>
    )
  }
}
