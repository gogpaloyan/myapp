import { NavLink } from "react-router-dom"
import s from './Navbar.module.css'

function Navbar({value}){


  

    return(
        <nav className={value ? s.nav : s.Nav}>
            <div>
            <NavLink aria-current="page" to="/">Contact</NavLink>
            </div>
            <div>
            <NavLink className={({isActive}) => isActive ? s.actived : ""} to="/posts">Posts</NavLink>
            </div>

            <div>
            <NavLink className={({isActive}) => isActive ? s.actived : ""}  to="/element">Element</NavLink>
            </div>
            <div>
            <NavLink className={({isActive}) => isActive ? s.actived : ""} to="/max">Max</NavLink>
            </div>        
            <div>
            <NavLink className={({isActive}) => isActive ? s.actived : ""} to="/memo">memo</NavLink>
            </div>
            <div>
      
        

            </div>
    </nav>
        )
}

export default Navbar