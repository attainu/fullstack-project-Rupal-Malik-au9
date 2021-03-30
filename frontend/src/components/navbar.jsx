import logo from "./assets/logo.jpg";
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
  const renderList = () => {
    if (state) {
      return [
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/profile">
            {state && `Welcome ${state.name}`}
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/about">
            About
          </Link>
        </li>,

        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/create">
            Add Post
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/travel">
            Travel
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/food">
            Eat
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/sports">
            Sports
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/followerspost">
            Following Posts
          </Link>
        </li>,

        <li key="3">
          <button className="btn btn-light " onClick={() => logoutHandler()}>
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/about">
            About
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/login">
            Login
          </Link>
        </li>,
        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/signup">
            Register
          </Link>
        </li>,
      ];
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to={state ? "/home" : "/"}>
            {" "}
            <img
              src={logo}
              alt="logo"
              width="70"
              class="d-inline-block align-top"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ marginLeft: "35rem" }}
          >
            <ul class="navbar-nav">{renderList()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}
