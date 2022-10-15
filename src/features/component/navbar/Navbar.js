import { NavLink } from "react-router-dom"
import s from './Navbar.module.css'

function Navbar({value}){


  

    return(
        <nav className={value ? s.nav : s.Nav}>
        <div>
            <NavLink className={(navData) => navData.isActive ? s.active : "" } to="/posts">Posts</NavLink>
        </div>
        <div>
            <NavLink className={(navData) => navData.isActive ? s.active : "" } to="/">Contact</NavLink>
        </div>
        <div>
            <NavLink className={(navData) => navData.isActive ? s.active : "" } to="/element">Element</NavLink>
        </div>
        <div>
      
        

        </div>
    </nav>
        )
}

export default Navbar