import { NavLink, Outlet } from "react-router-dom";
import info from "../photos/more.png";
import { useEffect, useState } from "react";
function SharedNavBar() {
    let [mobile, setMobile] = useState("nav-bar-items-mobile");
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }


    function settingMobile() {
        if (mobile === "nav-bar-items-mobile") {
            setMobile("nav-bar-items");
        } else {
            setMobile("nav-bar-items-mobile");
        }
    }
    useEffect(() => {
        if (windowSize.innerWidth > 900) {
            setMobile("nav-bar-items");
        }
    }, [windowSize.innerWidth]);

    return (
        <>
            <div className="nav-bar">
                <div className="nav-bar-logo">
                    <h3>ZERO</h3>
                </div>
                <div className={mobile}>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"about"}>Who Am I ?</NavLink>
                    <NavLink to={"projects"}>Projects</NavLink>
                    <NavLink to={"contact"}>{"Contact <Me"}</NavLink>
                </div>
                <button onClick={settingMobile} className="more-info">
                    <img src={info}></img>
                </button>
            </div>

            <Outlet></Outlet>
        </>
    );
}

export default SharedNavBar;
