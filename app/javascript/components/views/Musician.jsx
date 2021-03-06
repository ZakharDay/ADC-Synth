import React, { PureComponent } from 'react'

import Parts from '../instruments/Parts'
import Instruments from '../parts/Instruments'
import Channel from '../parts/Channel'

export default class Musician extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderParts = () => {
    const {
      parts,
      currentPartId,
      handlePartCreate,
      handlePartChange
    } = this.props

    return (
      <Parts
        parts={parts}
        currentPartId={currentPartId}
        handlePartCreate={handlePartCreate}
        handlePartChange={handlePartChange}
      />
    )
  }

  renderInstruments = () => {
    const {
      instruments,
      handleSynthValueChange,
      handleEffectCreate,
      handleEffectValueChange,
      handleSequenceChange
    } = this.props

    return (
      <Instruments
        instruments={instruments}
        handleSynthValueChange={handleSynthValueChange}
        handleEffectCreate={handleEffectCreate}
        handleEffectValueChange={handleEffectValueChange}
        handleSequenceChange={handleSequenceChange}
      />
    )
  }

  render() {
    const { parts, instruments } = this.props

    return (
      <div className="Musician">
        {parts ? this.renderParts() : ''}
        {instruments ? this.renderInstruments() : ''}
        <Channel />
      </div>
    )
  }
}
