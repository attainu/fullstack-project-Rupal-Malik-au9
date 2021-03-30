import logo from "./assets/logo.jpg";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { NavDropdown } from "react-bootstrap";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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
          <Link class="nav-link active" aria-current="page" to="/home">
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
          <Link class="nav-link" to="/followerspost">
            Following Posts
          </Link>
        </li>,

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Stories
          </DropdownToggle>
          <DropdownMenu right>
            <Link to="/food">
              <DropdownItem
                style={{
                  color: "black",
                  background: "#51E1ED",
                  border: "1px solid white",
                }}
              >
                Eat
              </DropdownItem>
            </Link>
            <Link to="/travel">
              <DropdownItem
                style={{
                  color: "black",
                  background: "#51E1ED",
                  border: "1px solid white",
                }}
              >
                Travel
              </DropdownItem>
            </Link>
            <Link to="/sports">
              <DropdownItem
                style={{
                  color: "black",
                  background: "#51E1ED",
                  border: "1px solid white",
                }}
              >
                Sports
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>,

        <li class="nav-item" style={{ marginLeft: "0.8rem" }}>
          <Link class="nav-link" to="/profile">
            {state && (
              <>
                <img
                  src={state.profileImage}
                  style={{ borderRadius: "50%", width: "7vh", height: "7vh" }}
                />{" "}
                {state.name && state.name.toUpperCase()}
              </>
            )}
          </Link>
        </li>,

        <li key="3">
          <button
            className="btn btn-light "
            style={{
              marginTop: "10px",
              background: "white",
              color: "black",
              border: "none",
            }}
            onClick={() => logoutHandler()}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li class="nav-item " style={{ marginLeft: "0.8rem" }}>
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
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light "
        style={{ zIndex: "10" }}
      >
        <div class="container-fluid ">
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
            className="navbar-toggler"
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
            className="collapse navbar-collapse "
            id="navbarNavDropdown"
            style={{ marginLeft: "35rem" }}
          >
            <ul className="navbar-nav " style={{ marginLeft: "auto" }}>
              {renderList()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
