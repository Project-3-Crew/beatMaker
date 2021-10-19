import SoundButton from "../components/SoundButton"
// import React from "react";
// import audio1 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
// import audio2 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
// import audio3 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
// import audio4 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
// import audio5 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
// import audio6 from "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
// import audio7 from "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"



function Sounds() {
  
  return (
    <div>
      <SoundButton url='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'>Heat-1</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">Heat-2</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">Heat-3</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">Heat-4</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">Heat-5</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">Heat-6</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">Heat-7</SoundButton>
    
    </div>
  )
}      
      



    // render a single song
    // onclick to play on button
    // trigger button press on key press
    // onClick multi
    

   
      
      
      
      
  
 
export default Sounds