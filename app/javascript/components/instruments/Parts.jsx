import React from 'react'

// import ToggleButton from '../controls/ToggleButton'
// import SimpleButton from '../controls/SimpleButton'
import InstrumentMenu from '../parts/InstrumentMenu'

export default class Parts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      parts,
      currentPartId,
      handlePartCreate,
      handlePartChange
    } = this.props

    let items = []

    parts.forEach((part, i) => {
      items.push({
        name: part.name,
        isOn: part.id === currentPartId ? true : false,
        handleClick: () => handlePartChange(part.id)
      })
    })
    return <InstrumentMenu name="Parts" buttons={items} />
  }
}
