import React, { PureComponent } from 'react'

export default class ButtonSet extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    return (
      <div className="ButtonSetComponent">
        <div className="ButtonSetLine">
          <div className="ButtonSets" onClick={handleClick}>
            <div className="ButtonSetsName">Sine</div>
          </div>
          <div className="ButtonSets" onClick={handleClick}>
            <div className="ButtonSetsName">Sine</div>
          </div>
        </div>
        <div className="ButtonSetLine">
          <div className="ButtonSets" onClick={handleClick}>
            <div className="ButtonSetsName">Sine</div>
          </div>
          <div className="ButtonSets" onClick={handleClick}>
            <div className="ButtonSetsName">Sine</div>
          </div>
        </div>
        <div className="ButtonSetLine">
          <div className="ButtonSets" onClick={handleClick}>
            <div className="ButtonSetsName">Sine</div>
          </div>
          <div className="ButtonSets" onClick={handleClick}>
            <div className="ButtonSetsName">Sine</div>
          </div>
        </div>
      </div>
    )
  }
}
