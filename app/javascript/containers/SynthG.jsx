import React from 'react'
import ButtonSet from '../components/controls/ButtonSetNew'
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
    let typeSet = [
      'sine',
      'square',
      'triangle',
      'sawtooth',
      'fatsawtooth',
      'ssada',
      'ssada'
    ]
    // // prettier-ignore
    // const curveSet = ['linear', 'exponential', 'sine', 'cosine', 'bounce', 'ripple', 'step']
    // const decayCurveSet = ['linear', 'exponential']

    const selectOption1 = {
      text: 'Option1',
      handleClick: () => this.handleLog(1)
    }

    const selectOption2 = {
      text: 'Option2',
      handleClick: () => this.handleLog(2)
    }

    const selectOption3 = {
      text: 'Option3',
      handleClick: () => this.handleLog(3)
    }
    const selectOption4 = {
      text: 'Option4',
      handleClick: () => this.handleLog(4)
    }

    const selectOption5 = {
      text: 'Option5',
      handleClick: () => this.handleLog(5)
    }

    const selectOptions = [
      selectOption1,
      selectOption2,
      selectOption3,
      selectOption4,
      selectOption5
    ]

    return (
      <div>
        <AddButton text="Add synth" size="Large" handleClick={null} />
        <AddButton text="Add synth" size="Medium" handleClick={null} />
        <ChannelButton text="1" on={false} handleClick={null} />
        <Select current={'Option 1'} options={selectOptions} />
        <Knob
          name="Name"
          min={0}
          max={100}
          current={60}
          handleChange={this.handleLog}
        />
        <Knob
          name="Name"
          min={-1000}
          max={-100}
          current={-500}
          handleChange={this.handleLog}
        />
        <ButtonSet
          text={'synth'}
          property={'[' + 1 + ']oscillator.type'}
          set={typeSet}
          current={typeSet[0]}
          // value={type}
          // handleValueChange={this.handleValueChange}
        />
      </div>
    )
  }
}
