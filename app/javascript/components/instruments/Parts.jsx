import React from 'react'

import ToggleButton from '../controls/ToggleButton'
import SimpleButton from '../controls/SimpleButton'

export default class Parts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { parts, handlePartCreate, handlePartChange, instrument } = this.props
    let partElements = []

    let it = 0

    parts.forEach((part, i) => {
      partElements.push(
        <ToggleButton
          text={part}
          on={instrument.parts[i].current}
          handleClick={() => handlePartChange(i)}
          key={i}
        />
      )

      it++
    })

    partElements.push(
      <div onClick={handlePartCreate} key={it}>
        New Part
      </div>
    )

    return (
      <div className="Parts">
        <div className="barHeading">Parts</div>

        <div className="partElements">{partElements}</div>
      </div>
    )
  }
}
