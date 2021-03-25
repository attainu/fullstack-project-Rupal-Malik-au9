import logo from './../logo.jpg';
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

export default function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "CLEAR" });
    history.push("/login");
  };
//   const renderList = () => {
//     if (state) {
//       return [
//         <li key="1">
//           <Link to="/profile">Profile</Link>
//         </li>,
//         <li key="2">
//           <Link to="/create">Add Post</Link>
//         </li>,
//         ,
//       ];
//     } else {
//       return [
//         <li key="1">
//           <Link to="/login">Login</Link>
//         </li>,
//         <li key="2">
//           <Link to="/signup">SignUp</Link>
//         </li>,
//       ];
//     }
//   };
  return (<>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to={state ? "/" : "/login"}> <img src={logo} alt="logo" width="100" class="d-inline-block align-top" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        {/* <div style={{ "display": "flex", "flexDirection": "row" }}>
                            <a class="nav-item" href='/'>
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </a>
                            <a class="nav-item" href='/about'>
                                <a class="nav-link" href="/about">About</a>
                            </a>
                            <a class="nav-item" href='/travel'>
                                <a class="nav-link" href="/travel">Travel</a>
                            </a>
                            <a class="nav-item" href='/food'>
                                <a class="nav-link" href="/food">Eat</a>
                            </a>
                            <a class="nav-item" href='/sports'>
                                <a class="nav-link" href="/sports">Sports</a>
                            </a>
                        </div> */}
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{ "marginLeft": "35rem" }}>
                        <ul class="navbar-nav">
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/profile">Profile</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/signup">Register</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/create">Add a post</a>
                            </li>
                            <li key="3">
          <button
            className="btn waves-effect waves-light "
            onClick={() => logoutHandler()}
          >
            Logout
          </button>
        </li>
                            {/* <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/travel">Travel</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/food">Eat</a>
                            </li>
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/sports">Sports</a>
                            </li> */}
                            <li class="nav-item" style={{ "marginLeft": "0.8rem" }}>
                                <a class="nav-link" href="/videos">Videos</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
        )
    
}
