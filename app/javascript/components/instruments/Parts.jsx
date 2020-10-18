import React, { PureComponent } from 'react'
import ToggleButton from '../controls/ToggleButton'
import SimpleButton from '../controls/SimpleButton'

export default class Parts extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      currentPartName,
      parts,
      handlePartChange,
      handlePartCreate
    } = this.props
    let partElements = []

    if (parts) {
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
          <div className="barHeading">
            <span>Parts</span>
          </div>
          <div className="partElements">{partElements}</div>
          <SimpleButton text="+" handleClick={handlePartCreate} />
        </div>
      )
    } else {
      return ''
    }
  }
}
