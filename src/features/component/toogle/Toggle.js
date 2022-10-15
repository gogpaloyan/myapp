import "./toogle.css"


function Toogle({value}){

    return (
    <div className="switch">
    <input type="checkbox" checked={value}/>
    <span className="slider round"></span>

    <div class="switch">
    <input type="checkbox" checked={value}/>
    <span class="slider round"></span>

  </div>
  </div>
    )
}

export default Toogle