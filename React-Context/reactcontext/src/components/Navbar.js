import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
        </nav>
    );
};

export default Navbar;
