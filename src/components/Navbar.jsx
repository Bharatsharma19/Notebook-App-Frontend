import React from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Notes App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/link" ? "active" : ""}`} to="/other">Link</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/bharatsharma1909/" target="_blank" rel="noopener noreferrer">Contact Me</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link className="btn btn-outline-primary mx-2" to="/login" role="button">Sign In</Link>
                        <Link className="btn btn-outline-primary mx-2" to="/signup" role="button">Sign Up</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
