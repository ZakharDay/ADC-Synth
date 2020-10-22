import React, { PureComponent } from 'react'
import Slider from '../components/controls/SliderNew'
import ButtonSet from '../components/controls/ButtonSetNew'
export default class SynthComponentsP extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="SliderNew">
          <h2 className="SliderTitle">Attack</h2>
          <Slider
            property="release"
            step="0.01"
            min="0"
            max="1"
            current=""
            instrumentId=""
            handleChange={console.log('clic')}
          />
        </div>

        <div className="ButtonSetLine">
          <ButtonSet />
        </div>
      </div>
    )
  }
}
