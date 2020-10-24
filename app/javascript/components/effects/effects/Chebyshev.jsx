import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'
import KnobNew from '../../controls/KnobNew'

export default class Chebyshev extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, order, type, oversample } = this.props
    const set = ['none', '2x', '4x']

    return (
      <div id="chebyshev" className="Effect">
        <div className="smallBar">
          <div>
            <span>Chebyshev</span>
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
            property="order"
            min={1}
            max={100}
            value={order}
            name="Order"
            handleChange={handleEffectValueChange}
          />

          <h2>Oversample</h2>
          <ButtonSet
            name={name}
            property="oversample"
            set={set}
            value={oversample}
            current={'none'}
            handleChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
