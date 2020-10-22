import React from 'react'
import ReactDOM from 'react-dom'
import SynthComponentsP from '../containers/SynthComponentsP'
//import Slider from '../components/controls/SliderNew'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SynthComponentsP />,
    document.body.appendChild(document.createElement('div'))
  )
})
