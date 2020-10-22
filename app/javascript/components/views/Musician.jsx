import React, { PureComponent } from 'react'

import Parts from '../instruments/Parts'
import Instruments from '../parts/Instruments'

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

  changeEnvelopeValue = () => {}
  handleChangeDetune = () => {}
  handleChangeSequence = () => {}
  changeEffectValue = () => {}

  renderInstruments = () => {
    const {
      instruments,
      handleSynthValueChange,
      handleEffectCreate
    } = this.props

    return (
      <Instruments
        instruments={instruments}
        handleSynthValueChange={handleSynthValueChange}
        handleEffectCreate={handleEffectCreate}
        changeEnvelopeValue={this.changeEnvelopeValue}
        handleChangeDetune={this.handleChangeDetune}
        handleChangeSequence={this.handleChangeSequence}
        chanheEffectSetValue={this.changeEffectValue}
      />
    )
  }

  render() {
    const { parts, instruments } = this.props

    return (
      <div className="Musician">
        {parts ? this.renderParts() : ''}
        {instruments ? this.renderInstruments() : ''}
      </div>
    )
  }
}
