import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class Chebyshev extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, order, oversample } = this.props
    const set = ['none', '2x', '4x']

    return (
      <div className="Effect">
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

        <h2>Order</h2>
        <Slider
          parentId={parentId}
          property="order"
          step="1"
          min="1"
          max="100"
          value={order}
          handleChange={handleEffectValueChange}
        />

        <h2>Oversample</h2>
        <ButtonSet
          name={name}
          property="oversample"
          set={set}
          value={oversample}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
