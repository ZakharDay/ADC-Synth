import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, property, option, text, current, handleClick } = this.props

    const classes = classnames({
      Button: true,
      on: option == current
    })

    return (
      <div className={classes} onClick={() => handleClick(property, option)}>
        {text}
      </div>
    )
  }
}
