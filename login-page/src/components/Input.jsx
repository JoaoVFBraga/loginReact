import "../components/Input.css"

function Input(props) {
  return (
    <div className="input-container">
      <span>{props.title}</span>
      <div className="input">
        <img className="input-img" src={props.img} />
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  )
}

export default Input