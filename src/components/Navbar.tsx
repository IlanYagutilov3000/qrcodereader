import { FunctionComponent } from "react";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>About</li>
                    <li>How To Use</li>
                    <li>About Developer</li>
                </ul>
            </nav>
        </>);
}

export default Navbar;