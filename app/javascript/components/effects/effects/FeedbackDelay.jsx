import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class FeedbackDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { feedbackDelay: prop }
  }

  render() {
    const {
      settings,
      instrumentId,
      chanheEffectSetValue,
      existenceСheck
    } = this.props

    let { wet, delayTime, maxDelay } = settings
    wet = existenceСheck(wet)
    delayTime = existenceСheck(delayTime)
    maxDelay = existenceСheck(maxDelay)

    return (
      <div className="Effect">
        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Wet</h2>
            <Slider
              property={this.createProp('wet')}
              min="0"
              max="1"
              step="0.1"
              current={wet}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />

            <h2>Delay Time</h2>
            <Slider
              property={this.createProp('delayTime')}
              min="0"
              max="100"
              step="10"
              current={delayTime}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />

            <h2>Max Delay</h2>
            <Slider
              property={this.createProp('maxDelay')}
              min="0"
              max="100"
              step="10"
              current={maxDelay}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />
          </div>
        </div>
      </div>
    )
  }
}
