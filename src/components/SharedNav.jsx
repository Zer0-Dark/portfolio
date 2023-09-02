import { NavLink, Outlet } from "react-router-dom";

function SharedNavBar(){

    return(
        <>
        <div className="nav-bar">
            <div className="nav-bar-logo">
            <h3>ZERO</h3>
            </div>
            <div className="nav-bar-items">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"about"}>Who Am I ?</NavLink>
            <NavLink to={"projects"}>Projects</NavLink>
            <NavLink to={"contact"}>{"Contact <Me"}</NavLink>
            </div>
        </div>
    
        <Outlet></Outlet>

        </>
    )
}

export default SharedNavBar;