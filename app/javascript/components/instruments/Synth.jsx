import React from 'react'

import ToggleButton from '../controls/ToggleButton'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      id,
      type,
      name,
      synth,
      effects,
      sequences,
      channel,
      currentInstrument,
      currentBarTab,
      handleBarTabChange
    } = this.props

    return (
      <div className="Synth">
        <div className="synthBar">
          <div className="barHeading">
            <span>{name}</span>
          </div>
          <div className="parts">
            <ToggleButton
              text="Sound"
              on={currentBarTab === 'Sound' ? true : false}
              handleClick={handleBarTabChange}
            />

            <ToggleButton
              text="Sequence"
              on={currentBarTab === 'Sequence' ? true : false}
              handleClick={handleBarTabChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
