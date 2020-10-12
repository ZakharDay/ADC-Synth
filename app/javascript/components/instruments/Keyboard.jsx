import React from 'react'

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="keyboard">{this.props.renderNoteButtons()}</div>
  }
}
