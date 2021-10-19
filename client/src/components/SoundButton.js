

function SoundButton(props) {

  let audio = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  );
  const start = () => {
    audio.play();
  };
  return <button onClick={start}>Heat-1</button>;
}
export default SoundButton;
