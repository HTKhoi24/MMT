import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/mystyle.css'
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container ">
                    <img src="https://i.pinimg.com/474x/40/b7/48/40b74899c77de64cb42b4ab84085e75e.jpg" width="50px" height="50px" />
                    <a className="navbar-brand ml-3" href="#">Smart Room</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/SignIn">Sign In </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/SignUp">Sign Up </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
