import React from 'react'
import ButtonSet from '../components/controls/ButtonSet'
import AddButton from '../components/controls/AddButtonNew'
import ChannelButton from '../components/controls/ChannelButtonNew'
import Select from '../components/controls/SelectNew'
import Knob from '../components/controls/KnobNew'

export default class SynthG extends React.Component {
  constructor(props) {
    super(props)
  }
  handleLog = (a) => {
    console.log(a)
  }

  render() {
    // let typeSet = ['sine', 'square', 'triangle', 'sawtooth', 'fatsawtooth']
    // // prettier-ignore
    // const curveSet = ['linear', 'exponential', 'sine', 'cosine', 'bounce', 'ripple', 'step']
    // const decayCurveSet = ['linear', 'exponential']

    return (
      <div>
        <AddButton text="Add synth" size="Large" handleClick={null} />
        <AddButton text="Add synth" size="Medium" handleClick={null} />
        <ChannelButton text="1" on={false} handleClick={null} />
        <Select current={'Option 1'} />
        <Knob
          name="Name"
          min={-60}
          max={60}
          current={-60}
          handleChange={this.handleLog}
        />
      </div>

      // <ButtonSet
      //   text={'synth'}
      //   property={'[' + 1 + ']oscillator.type'}
      //   set={typeSet}
      //   current={typeSet[0]}
      //   // value={type}
      //   // handleValueChange={this.handleValueChange}
      // />
    )
  }
}
