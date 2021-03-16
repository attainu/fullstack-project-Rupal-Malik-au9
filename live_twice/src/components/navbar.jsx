import React, { PureComponent } from 'react'
import logo from './../logo.jpg';
import { Link } from "react-router-dom";
export default class Navbar extends PureComponent {
    render() {
        return (<>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/"> <img src={logo} alt="logo" width="100" class="d-inline-block align-top" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        <div style={{ "display": "flex", "flexDirection": "row" }}>
                            <a class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </a>
                            <a class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </a>
                            <a class="nav-item">
                                <a class="nav-link" href="/travel">Travel</a>
                            </a>
                            <a class="nav-item">
                                <a class="nav-link" href="/food">Eat</a>
                            </a>
                            <a class="nav-item">
                                <a class="nav-link" href="/sports">Sports</a>
                            </a>
                        </div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{ "marginLeft": "40rem" }}>
                        <ul class="navbar-nav">
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="/travel">Travel</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="/food">Eat</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="/sports">Sports</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="/videos">Videos</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
        )
    }
}
