import * as Tone from 'tone'

function synthState() {
  return {
    id: Math.floor(Math.random() * 10000),
    type: 'synth',
    name: 'Synth',
    synth: {},
    effects: [],
    sequences: [],
    channel: {
      pan: 0,
      volume: 0,
      mute: false,
      solo: false
    }
  }
}

function createToneSynth() {
  return new Tone.Synth()
}

export { synthState, createToneSynth }
