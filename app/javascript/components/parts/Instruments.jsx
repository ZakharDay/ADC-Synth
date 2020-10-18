import React from 'react'

import Synth from '../instruments/Synth'
import Sound from './Sound'
import Sequencer from './Sequencer'
import Sampler from '../instruments/Sampler'
import Audio from '../instruments/Audio'
import SimpleButton from '../controls/SimpleButton'
import ButtonSet from '../controls/ButtonSet'

export default class Instruments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      instruments,
      currentInstrument,
      currentBarTab,
      handleBarTabChange,
      patterns,
      currentQuarter
    } = this.props
    let instrumentElements = []
    let instrumentSetting

    if (instruments) {
      instruments.forEach((instrument, i) => {
        if (instrument.type === 'synth') {
          instrumentElements.push(
            <Synth
              {...instrument}
              currentInstrument={currentInstrument}
              currentBarTab={currentBarTab}
              handleBarTabChange={handleBarTabChange}
              key={i}
            />
          )
        } else if (instrument.type === 'sampler') {
          instrumentElements.push(
            <Sampler
              {...instrument}
              currentInstrument={currentInstrument}
              currentBarTab={currentBarTab}
              handleBarTabChange={handleBarTabChange}
              key={i}
            />
          )
        } else if (instrument.type === 'audio') {
          instrumentElements.push(
            <Audio
              {...instrument}
              currentInstrument={currentInstrument}
              currentBarTab={currentBarTab}
              handleBarTabChange={handleBarTabChange}
              key={i}
            />
          )
        }
      })
      if (currentBarTab == 'Sound') {
        instrumentSetting = <Sound />
      } else if (currentBarTab == 'Sequence') {
        let cur = 0
        let steps = 16
        instrumentSetting = (
          <Sequencer
            synth={instruments}
            steps={steps}
            patterns={patterns}
            currentPattern={cur}
            currentQuarter={currentQuarter}
          />
        )
      }
    }
    let set = {
      Synth: this.props.handleSynthCreate,
      Sampler: this.props.handleSamplerCreate,
      Audio: this.props.handleAudioCreate
    }
    return (
      <div className="Instruments">
        {instrumentElements}
        {instrumentSetting}

        <ButtonSet text="+ Add Instrument" set={set} />
      </div>
    )
  }
}
