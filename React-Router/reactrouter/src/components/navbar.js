import React from "react";
import "./Navbar.css";

// Importando o Link
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
};

export default Navbar;
