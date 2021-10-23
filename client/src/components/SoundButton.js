import "./styles/Sounds.css"

function SoundButton(props) {

  let audio = new Audio(
    props.url
  );
  const start = () => {
    audio.play();
  };
  return <button onClick={start}>{props.children}</button>;
}

export default SoundButton;
