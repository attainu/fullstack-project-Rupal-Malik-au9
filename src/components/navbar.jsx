import React, { PureComponent } from 'react'
import logo from './../logo.jpg';
export default class Navbar extends PureComponent {
    render() {
        return (<>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src={logo} alt="" width="100" class="d-inline-block align-top" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{ "marginLeft": "40rem" }}>
                        <ul class="navbar-nav">
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="#">Travel</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="#">Eat</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="#">Sports</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "2rem" }}>
                                <a class="nav-link" href="#">Videos</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
        )
    }
}
