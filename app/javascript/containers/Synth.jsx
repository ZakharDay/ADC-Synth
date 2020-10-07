import React from "react";
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    synth.triggerAttackRelease("C4", "8n");
  };

  render() {
    return (
      <div className="Button" onClick={this.handleClick}>
        Play
      </div>
    );
  }
}
