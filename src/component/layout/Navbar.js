import React from "react";
import { Link,NavLink } from "react-router-dom";
const Navbar=()=>
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">React User</a>
               
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>
                    
            </div>
            <Link class="btn btn-outline-light" to="/users/create">ADD USER</Link>
        </div>
    </nav>
    )
}
export default Navbar;