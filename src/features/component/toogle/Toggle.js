import "./toogle.css"


function Toogle({value, setValue}){

    return (
    <label class="switch">
    <input type="checkbox" checked={value} onChange={() => setValue(!value)}/>
    <span class="slider round"></span>
  </label>
    )
}

export default Toogle