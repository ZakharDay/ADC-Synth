import React from 'react'

import InstrumentMenu from './InstrumentMenu'

export default class Channel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let buttons = [
      {
        name: 'Synth',
        isOn: false,
        handleClick: () => console.log('Channels click')
      },
      {
        name: 'Sampler',
        isOn: false,
        handleClick: () => console.log('Channels click')
      }
    ]
    return (
      <div className="Channel">
        <InstrumentMenu
          name="channels"
          open={() => console.log('Channels click')}
          buttons={buttons}
        />
      </div>
    )
  }
}
