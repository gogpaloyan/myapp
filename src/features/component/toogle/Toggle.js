import "./toogle.css"


function Toogle({value}){

    return (
    <div class="switch">
    <input type="checkbox" checked={value}/>
    <span class="slider round"></span>
  </div>
    )
}

export default Toogle