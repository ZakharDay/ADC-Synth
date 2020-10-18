import classnames from 'classnames'
import React from 'react'

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, on, handleClick } = this.props

    const classes = classnames({
      ToggleButton: true,
      on: on
    })

    return (
      <div className={classes} onClick={handleClick}>
        <span>{text}</span>
      </div>
    )
  }
}
