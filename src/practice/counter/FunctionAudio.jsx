import React,{useState, useEffect} from 'react';
import LOKI from '../counter/LOKI.mp3';
const FunctionAudio=()=>{
    
useEffect(()=>{
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();

    },[]);
    
    
    return(<>
      <audio className="audio-element">
          <source src={LOKI}></source>
      </audio>
    
    
    </>);
}
export default FunctionAudio;