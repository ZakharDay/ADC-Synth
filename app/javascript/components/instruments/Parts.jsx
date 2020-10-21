import React from 'react'

import ToggleButton from '../controls/ToggleButton'
import SimpleButton from '../controls/SimpleButton'

export default class Parts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      parts,
      currentPartId,
      handlePartCreate,
      handlePartChange
    } = this.props

    let partElements = []

    parts.forEach((part, i) => {
      partElements.push(
        <ToggleButton
          text={part.name}
          on={part.id === currentPartId}
          handleClick={() => handlePartChange(part.id)}
          key={i}
        />
      )
    })

    return (
      <div className="Parts">
        <div className="barHeading">Parts</div>
        <div className="partElements">{partElements}</div>

        <div className="barAside">
          <SimpleButton text="New Part" handleClick={handlePartCreate} />
        </div>
      </div>
    )
  }
}
