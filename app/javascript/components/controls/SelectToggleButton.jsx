import classnames from 'classnames'
import React from 'react'

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, on, handleClick } = this.props

    // const classes = classnames({
    //   openedSelect: true,
    //   on: false
    // })

    return (
      <div className="openedSelect" onClick={handleClick}>
        <span>{text}</span>
      </div>
    )
  }
}
