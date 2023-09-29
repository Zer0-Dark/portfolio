import { NavLink, Outlet } from "react-router-dom";
import info from "../photos/more.png";
import { useState } from "react";
function SharedNavBar() {
    let [mobile, setMobile] = useState("nav-bar-items");


    function settingMobile() {
        if (mobile === "nav-bar-items-active") {
            setMobile("nav-bar-items");
        } else {
            setMobile("nav-bar-items-active");
        }
    }


    return (
        <>
            <div className="nav-bar">
 
                <div className="nav-bar-logo">
                    <h3>ZER0</h3>

                </div>
                <div className={mobile}>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"about"}>About</NavLink>
                    <NavLink to={"projects"}>Projects</NavLink>
                    <NavLink to={"contact"}>{"Contact<Me"}</NavLink>
                </div>
                <button className="more-info" onClick={settingMobile}>
                    <img src={info}></img>
                </button>
            </div>

            <Outlet></Outlet>
        </>
    );
}

export default SharedNavBar;
