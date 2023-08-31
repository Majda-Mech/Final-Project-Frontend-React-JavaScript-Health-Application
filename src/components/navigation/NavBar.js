import React, {useContext} from 'react';
import './NavBar.css'
import {NavLink, useNavigate} from "react-router-dom";
import Button from "../button/Button";
import {AuthContext} from "../context/AuthContext";
import logo from '../../../../frontend-eindopdracht/src/assets/logo.png';

const NavBar = () => {
    const navigate = useNavigate()
    const {logout, isAuth, user} = useContext(AuthContext)

    function signUpFunction() {
        navigate("/sign-up");
    }

    function logOutFunction() {
        logout()
    }

    return (
        <nav>
            <span className="nav-left-styling">
                <img src={logo} alt="logo" className="logo-styling"/>
            </span>
            <span className="nav-center-styling">
            <NavLink to="/" exact={true} activeClassName="active-link"> Home </NavLink>
            <NavLink to="/about-us" activeClassName="active-link"> About Us </NavLink>
            <NavLink to="/our-app" activeClassName="active-link"> Our App </NavLink>
            <NavLink to="/contacts" activeClassName="active-link"> Contacts </NavLink>
            </span>
            <span className="nav-right-styling">
                Welcome {user && user.username}
            { !isAuth?
                <NavLink to="/log-in" activeClassName="active-link">
                    Log in </NavLink> : <Button clickHandler={logOutFunction}>Logout</Button> }
                {!isAuth?
                <Button clickHandler={signUpFunction} >Sign Up</Button> : ""}
            </span>
        </nav>
    );
};

export default NavBar;