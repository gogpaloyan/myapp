import "./toogle.css"


function Toogle({value}){


    return <div className="switch">
             <input type="checkbox" checked={value} onChange={(e) => {}}/> 
             <span className="slider round"></span> 
         </div>
    
}

export default Toogle