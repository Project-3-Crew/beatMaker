import {useQuery,useMutation} from '@apollo/client'
import { QUERY_ME } from '../utils/queries';
import SoundButton from "../components/SoundButton"
import { ADD_SOUND } from '../utils/mutations';

// import React from "react";
// import audio1 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
// import audio2 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
// import audio3 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
// import audio4 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
// import audio5 from "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
// import audio6 from "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
// import audio7 from "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"

 
const soundsMap = {
  heaterOne: {
    label: "Heat-1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  heaterTwo: {
    label: "Heat-2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  heaterThree: {
    label: "Heat-3",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  heaterFour: {
    label: "Heat-4",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  heaterFive: {
    label: "Heat-5",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  heaterSix: {
    label: "Heat-6",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  },
  heaterSeven: {
    label: "Heat-7",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
}

function SoundsComponent() {
  // const [sounds, setSounds] = useState('');
  // const [characterCount, setCharacterCount] = useState(0);
  const [addSound, { error }] = useMutation(ADD_SOUND)
  const { loading, data } = useQuery(QUERY_ME);
  const sounds = [ 'heaterOne', 'heaterTwo','heaterThree','heaterFour','heaterFive','heaterSix', 'heaterSeven' ];
  console.log("its data obj: ",data)
  if(loading){
    return <div>Loading...</div>;
  }
  const handleAddSoundSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addSound({
        variables: {
          //create a dropdown menu for this 
          sounds:'heaterFive' 
        },
      });
      // setSounds('');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {/*  map over sounds and use each key to get values from the soundsMap*/}
      {data?.me.sounds.map((soundKey) => {
        const {label, sound } = soundsMap[soundKey];
        return <SoundButton  url={sound} >{label}</SoundButton> 
      })}
      
      <div><button onClick={handleAddSoundSubmit}>add Sound to user</button></div>
      {/* <SoundButton url={sounds}>Heat-1</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">Heat-2</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">Heat-3</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">Heat-4</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">Heat-5</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">Heat-6</SoundButton>
      <SoundButton url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">Heat-7</SoundButton> */}
    </div>
  )
}      
      



    // render a single song
    // onclick to play on button
    // trigger button press on key press
    // onClick multi
    

   
      
      
      
      
  
 
export default SoundsComponent