import React, { PureComponent } from 'react'

import ToggleButton from './ToggleButton'

export default class ButtonSet extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let { parentId, property, set, value, handleChange } = this.props
    let buttonElements = []

    set.forEach((option, i) => {
      buttonElements.push(
        <ToggleButton
          text={option}
          on={option === value}
          handleClick={() => handleChange(parentId, property, option)}
          key={i}
        />
      )
    })

    return <div className="ButtonSet">{buttonElements}</div>
  }
}
