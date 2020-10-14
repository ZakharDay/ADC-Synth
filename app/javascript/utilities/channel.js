import * as Tone from 'tone'

function createChannel(volume) {
  return new Tone.Channel({
    pan: 0,
    volume: volume,
    mute: false,
    solo: false
  }).toDestination()
}

export { createChannel }
