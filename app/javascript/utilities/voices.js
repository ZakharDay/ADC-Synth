function voiceState() {
  return {
    id: Math.random() * 10000,
    keyboard: {
      octave: 4,
      isPlaying: false
    },
    sequencer: {
      steps: 4,
      currentPattern: 0,
      isPlaying: true,
      patterns: [
        [
          {
            step: 0,
            note: 'C',
            octave: 1
          },
          {
            step: 1,
            note: 'E',
            octave: 2
          },
          {
            step: 2,
            note: 'G',
            octave: 1
          },
          {
            step: 3,
            note: 'E',
            octave: 3
          }
        ]
      ]
    },
    synth: {},
    effects: [],
    channel: {
      pan: 0,
      volume: 0,
      mute: false,
      solo: false
    }
  }
}

export { voiceState }
