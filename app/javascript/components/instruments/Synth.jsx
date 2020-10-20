import React from 'react'

import Sequencer from '../parts/Sequencer'
import ToneSynth from '../synths/ToneSynth'
import Effects from '../effects/Effects'

import ToggleButton from '../controls/ToggleButton'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentBarTab: 'none'
    }
  }

  handleBarTabChange = (button) => {
    let newCurrentBarTab
    if (this.state.currentBarTab === button) {
      newCurrentBarTab = 'none'
    } else {
      newCurrentBarTab = button
    }
    this.setState({
      currentBarTab: newCurrentBarTab
    })
  }

  renderToggleButtons = () => {
    return (
      <div className="ToggleButtons">
        <ToggleButton
          text="Sound"
          on={this.state.currentBarTab === 'Sound' ? true : false}
          handleClick={() => this.handleBarTabChange('Sound')}
        />
        <ToggleButton
          text="Sequence"
          on={this.state.currentBarTab === 'Sequence' ? true : false}
          handleClick={() => this.handleBarTabChange('Sequence')}
        />
      </div>
    )
  }

  renderSettings = () => {
    const { currentBarTab } = this.state
    const {
      instrument,
      changeEnvelopeValue,
      instrumentId,
      handleChangeDetune,
      handleChangeSequence
    } = this.props
    let settings
    instrument.parts.forEach((part, i) => {
      if (part.current) {
        settings = part
      }
    })
    if (currentBarTab === 'Sound') {
      return (
        <div className="settings">
          <ToneSynth
            instrumentId={instrumentId}
            settings={settings}
            changeEnvelopeValue={changeEnvelopeValue}
            handleChangeDetune={handleChangeDetune}
          />
          <Effects settings={settings} instrumentId={instrumentId} />
        </div>
      )
      return <div></div>
    } else if (currentBarTab === 'Sequence') {
      return (
        <Sequencer
          instrumentId={instrumentId}
          settings={settings}
          handleChangeSequence={handleChangeSequence}
        />
      )
    } else {
      return ''
    }
  }

  render() {
    const { instrument } = this.props

    return (
      <div className="Synth">
        <div className="synthBar">
          <div className="barHeading">{instrument.name}</div>
          {this.renderToggleButtons()}
        </div>
        {this.renderSettings()}
      </div>
    )
  }
}
