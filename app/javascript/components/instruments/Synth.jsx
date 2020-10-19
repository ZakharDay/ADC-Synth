import React from 'react'

import ToggleButton from '../controls/ToggleButton'
import Sequencer from '../parts/Sequencer'

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
    if (currentBarTab === 'Sound') {
      return <div>Sound</div>
    } else if (currentBarTab === 'Sequence') {
      return <Sequencer />
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
