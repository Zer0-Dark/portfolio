import { NavLink, Outlet } from "react-router-dom";

export default function AboutMe(){


    return(
        <div className="about-me">
        <div className="about-me-nav">
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"education"}>Education</NavLink>
        <NavLink to={"CV"}>CV</NavLink>
        <NavLink to={"hobbies"}>Hobbies</NavLink>

        </div>
        <div className="about-me-main">
        <Outlet></Outlet>
        </div>
        </div>
    )
}