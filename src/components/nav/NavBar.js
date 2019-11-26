import React from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'

const NavBar = props => {
    const {isAuthenticated, logout} = useSimpleAuth()

    return (
        <header>
            <h1 className="site-title">Student Kennels<br />
                <small>Loving care when you're not there.</small>
            </h1>
            <nav>
                <ul className="container">
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    {isAuthenticated() ?
                        <>
                            <li><Link className="nav-link" to="/animals">Animals</Link></li>
                            <li>Locations</li>
                            <li>Employees</li>
                            <li>Owners</li>
                            <li><a onClick={props.clearUser}>Logout</a></li>
                        </>
                        : null}
                            <li>Locations</li>
                    {isAuthenticated() ?
                        <>
                            <li>Employees</li>
                            <li>Owners</li>
                            <li><a onClick={() => {
                                logout()
                                props.history.push({
                                    pathname: "/"
                                })
                            }}>Logout</a></li>
                        </>
                        : <li><Link className="nav-link" to="/login">Login</Link></li>}

                </ul>
            </nav>
        </header>
    )
}


export default NavBar;