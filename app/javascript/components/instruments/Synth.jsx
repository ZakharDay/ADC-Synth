import React from 'react'

import Sequencer from '../parts/Sequencer'
import InstrumentMenu from '../parts/InstrumentMenu'
import ToneSynth from '../synths/ToneSynth'
import Effects from '../effects/Effects'

import ToggleButton from '../controls/ToggleButton'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'none'
    }
  }

  handleBarTabChange = (button) => {
    let newCurrentBarTab

    console.log(button)

    if (this.state.currentTab === button) {
      newCurrentBarTab = 'none'
    } else {
      newCurrentBarTab = button
    }

    this.setState({
      currentTab: newCurrentBarTab
    })
  }

  renderSettings = () => {
    const { currentTab } = this.state

    const {
      instrument,
      handleSynthValueChange,
      handleEffectCreate,
      handleEffectValueChange
    } = this.props

    let settings

    instrument.parts.forEach((part, i) => {
      if (part.current) {
        settings = part
      }
    })

    if (currentTab === 'Sound') {
      return (
        <div className="settings">
          <ToneSynth
            instrument={instrument}
            settings={settings}
            handleSynthValueChange={handleSynthValueChange}
          />

          <Effects
            instrument={instrument}
            settings={settings}
            handleEffectCreate={handleEffectCreate}
            handleEffectValueChange={handleEffectValueChange}
          />
        </div>
      )

      return <div></div>
    } else if (currentTab === 'Sequence') {
      return (
        <Sequencer
          instrument={instrument}
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

    const buttons = [
      {
        name: 'Sound',
        isOn: this.state.currentTab === 'Sound' ? true : false,
        handleClick: () => this.handleBarTabChange('Sound')
      },
      {
        name: 'Sequence',
        isOn: this.state.currentTab === 'Sequence' ? true : false,
        handleClick: () => this.handleBarTabChange('Sequence')
      }
    ]

    return (
      <div className="Synth">
        <InstrumentMenu
          name={instrument.name}
          open={this.state.currentTab}
          buttons={buttons}
        />
        {this.renderSettings()}
      </div>
    )
  }
}
