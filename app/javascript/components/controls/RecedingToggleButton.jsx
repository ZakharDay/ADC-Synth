import classnames from 'classnames'
import React from 'react'

export default class RecedingToggleButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, on, handleClick, remove } = this.props

    const classes = classnames({
      RecedingToggleButton: true,
      on: on
    })

    return (
      <div className={classes} onClick={handleClick}>
        <span>{text}</span>
        <div className="close" onClick={remove}></div>
      </div>
    )
  }
}
