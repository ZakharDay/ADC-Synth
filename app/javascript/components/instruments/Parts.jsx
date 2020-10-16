import React, { PureComponent } from 'react'
import ToggleButton from '../controls/ToggleButton'

export default class Parts extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPartName, parts, handlePartChange } = this.props
    let partElements = []

    parts.forEach((part, i) => {
      const on = part === currentPartName ? true : false

      partElements.push(
        <ToggleButton
          text={part}
          on={on}
          handleClick={handlePartChange}
          key={i}
        />
      )
    })

    return (
      <div className="Parts">
        <div className="barHeading">Parts</div>
        {partElements}
      </div>
    )
  }
}
