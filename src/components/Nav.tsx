import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="#work">Portfolio</NavLink>
        </nav>
    )
}

export default Nav;