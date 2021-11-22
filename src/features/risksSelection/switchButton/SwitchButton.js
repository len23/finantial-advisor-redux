import './SwitchButton.css';

export default function SwitchButtton(props) {
  return (
    <img
      className="img-pointer bg-info border border-3 border-success"
      alt="Svg Icon"
      src={props.src} width="px"
      onClick={props.handleDataDisplay} />
  )

}