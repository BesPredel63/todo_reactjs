import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        };
    };

    return (
        <nav className="primary-nav">
            <NavLink style={navLinkStyles} to="/">
                Goals
            </NavLink>
            <NavLink style={navLinkStyles} to="/categories">
                Categories
            </NavLink>
        </nav>
    );
};

export default NavBar;