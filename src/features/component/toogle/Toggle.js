import "./toogle.css"


function Toogle({value, setValue}){

    return (
    <div className="switch">
    <input type="checkbox" checked={value} onChange={() => setValue(!value)}/>
    <span className="slider round"></span>
  </div>
    )
}

export default Toogle