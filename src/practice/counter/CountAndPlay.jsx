import React, { Component } from "react"
import LOKI from '../counter/LOKI.mp3';
export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src={LOKI}></source>
          
        </audio>
      </div>
    )
  }
}