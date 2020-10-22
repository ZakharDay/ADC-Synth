import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class ChannelButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, on, handleClick } = this.props

    const classes = classnames({
      ChannelButton: true,
      on: on
    })

    return (
      <div className={classes} onClick={handleClick}>
        <span>{text}</span>
      </div>
    )
  }
}
