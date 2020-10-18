// function voiceState() {
//   return {
//     id: Math.random() * 10000,
//     keyboard: {
//       octave: 4,
//       isPlaying: false
//     },
//     sequencer: {
//       steps: 4,
//       currentPattern: 0,
//       isPlaying: true,
//       patterns: [
//         [
//           {
//             step: 0,
//             note: 'C',
//             octave: 1
//           },
//           {
//             step: 1,
//             note: 'E',
//             octave: 2
//           },
//           {
//             step: 2,
//             note: 'G',
//             octave: 1
//           },
//           {
//             step: 3,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 4,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 5,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 6,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 7,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 8,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 9,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 10,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 11,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 12,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 13,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 14,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 15,
//             note: 'E',
//             octave: 3
//           },
//           {
//             step: 16,
//             note: 'E',
//             octave: 3
//           }
//         ]
//       ]
//     },
//     synth: {},
//     effects: [],
//     channel: {
//       pan: 0,
//       volume: 0,
//       mute: false,
//       solo: false
//     }
//   }
// }
let voiceState = {
  id: Math.random() * 10000,
  keyboard: {
    octave: 4,
    isPlaying: false
  },
  sequencer: {
    steps: 16,
    currentPattern: 0,
    isPlaying: true,
    patterns: [
      [
        {
          step: 0,
          note: 'C',
          octave: 6
        },
        {
          step: 1,
          note: 'C',
          octave: 6
        },
        {
          step: 2,
          note: 'C',
          octave: 6
        },
        {
          step: 3,
          note: 'C',
          octave: 6
        },
        {
          step: 4,
          note: 'B',
          octave: 6
        },
        {
          step: 5,
          note: 'B',
          octave: 6
        },
        {
          step: 6,
          note: 'B',
          octave: 6
        },
        {
          step: 7,
          note: 'B',
          octave: 6
        },
        {
          step: 8,
          note: 'E',
          octave: 7
        },
        {
          step: 9,
          note: 'E',
          octave: 7
        },
        {
          step: 10,
          note: 'E',
          octave: 7
        },
        {
          step: 11,
          note: 'E',
          octave: 7
        },
        {
          step: 12,
          note: 'E',
          octave: 6
        },
        {
          step: 13,
          note: 'E',
          octave: 6
        },
        {
          step: 14,
          note: 'E',
          octave: 6
        },
        {
          step: 15,
          note: 'E',
          octave: 6
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

export { voiceState }
