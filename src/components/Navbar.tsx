import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/HowToUse">How To Use</NavLink></li>
                    <li><NavLink to="/AboutDeveloper">About DEveloper</NavLink></li>
                </ul>
            </nav>
        </>);
}

export default Navbar;