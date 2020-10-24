import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'
import KnobNew from '../../controls/KnobNew'

export default class BitCrusher extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, bits } = effect

    return (
      <div id="bitCrusher" className="Effect">
        <div className="smallBar">
          <div>
            <span>Bit Crusher</span>
            <p></p>
          </div>
        </div>

        <div className="narrowEffectControls">
          <h2>Wet</h2>
          <Slider
            parentId={parentId}
            property="wet"
            step="0.01"
            min="0"
            max="1"
            value={wet}
            handleChange={handleEffectValueChange}
          />

          <KnobNew
            parentId={parentId}
            property="bits"
            min={1}
            max={8}
            value={0}
            name="Bits"
            handleChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
