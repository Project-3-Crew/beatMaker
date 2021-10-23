// import {useQuery,useMutation} from '@apollo/client'
// import { QUERY_ME } from '../utils/queries';
import SoundButton from "../components/SoundButton"
// import { ADD_SOUND } from '../utils/mutations';
import React from "react"

function SoundsComponent() {

  return (
    <div >
      <SoundButton url='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'>Heat-1</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">Heat-2</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">Heat-3</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">Heat-4</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">Heat-5</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">Heat-6</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">Heat-7</SoundButton>
      
      
      <button onClick={saveBea}>Save Audio</button>
    </div>
  )
  
}

 
// const soundsMap = {
//   heaterOne: {
//     label: "Heat-1",
//     sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
//   },
//   heaterTwo: {
//     label: "Heat-2",
//     sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
//   },
//   heaterThree: {
//     label: "Heat-3",
//     sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
//   },
//   heaterFour: {
//     label: "Heat-4",
//     sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
//   },
//   heaterFive: {
//     label: "Heat-5",
//     sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
//   },
//   heaterSix: {
//     label: "Heat-6",
//     sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
//   },
//   heaterSeven: {
//     label: "Heat-7",
//     sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
//   },
// }

// function SoundsComponent() {
//   // const [sounds, setSounds] = useState('');
//   // const [characterCount, setCharacterCount] = useState(0);
//   const [addSound, { error }] = useMutation(ADD_SOUND)
//   const { loading, data } = useQuery(QUERY_ME);
//   const sounds = [ 'heater-1', 'heater-2','heater-3','heater-4','heater-5','heater-6', 'heater-7' ];
//   console.log("its data obj: ",data, error, sounds )
//   if(loading){
//     return <div>Loading...</div>;
//   }
//   const handleAddSoundSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addSound({
//         variables: {
//           //create a dropdown menu for this 
//           sounds: 'heater-1' 
//         },
//       });
//       data()
//       // setSounds('');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       {/*  map over sounds and use each key to get values from the soundsMap*/}
//       {data?.me.sounds.map((soundKey) => {
//         const {label, sound } = soundsMap[soundKey];
//         return <SoundButton  url={sound} >{label}</SoundButton> 
//       })}
      
//       <div><button onClick={handleAddSoundSubmit.soundsMap}>add Sound to user</button></div>
     
//     </div>
//   )
// }      


    // render a single song
    // onclick to play on button
    // trigger button press on key press
    // onClick multi
 
export default SoundsComponent