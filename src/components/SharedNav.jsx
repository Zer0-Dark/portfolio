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
                    <h3>ZERO</h3>
                </div>
                <div className={mobile}>
                    <NavLink onClick={settingMobile} to={"/"}>Home</NavLink>
                    <NavLink onClick={settingMobile} to={"about"}>Who Am I ?</NavLink>
                    <NavLink onClick={settingMobile} to={"projects"}>Projects</NavLink>
                    <NavLink onClick={settingMobile} to={"contact"}>{"Contact <Me"}</NavLink>
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
