import React from "react";
// import audio1 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
// import audio2 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
// import audio3 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
// import audio4 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
// import audio5 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
// import audio6 from "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
// import audio7 from "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"



function Sounds() {
  let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
  const start = () => {
    audio.play()
  }
  return (
    <div>
      <button onClick={start}>Heat-1</button>
    </div>
  )
}      
      



    // render a single song
    // onclick to play on button
    // trigger button press on key press
    // onClick multi
    // write map function to dynamically render each beat sound

   
      
      
      
      
  
 
export default Sounds