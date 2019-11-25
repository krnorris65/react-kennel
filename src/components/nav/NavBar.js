import React from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = props => {

    return (
        <header>
            <h1 className="site-title">Student Kennels<br />
                <small>Loving care when you're not there.</small>
            </h1>
            <nav>
                <ul className="container">
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    {(props.authenticated()) ?
                        <>
                            <li><Link className="nav-link" to="/animals">Animals</Link></li>
                            <li>Locations</li>
                            <li>Employees</li>
                            <li>Owners</li>
                            <li><a onClick={props.clearUser}>Logout</a></li>
                        </>
                        : null}
                </ul>
            </nav>
        </header>
    )
}


export default NavBar;