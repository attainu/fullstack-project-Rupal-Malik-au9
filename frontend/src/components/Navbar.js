import React, { useContext } from "react";
import "./navbar.css";
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
        <li key="1">
          <Link to="/profile">Profile</Link>
        </li>,
        <li key="2">
          <Link to="/create">Add Post</Link>
        </li>,
        <li key="3">
          <button
            className="btn waves-effect waves-light "
            onClick={() => logoutHandler()}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li key="1">
          <Link to="/login">Login</Link>
        </li>,
        <li key="2">
          <Link to="/signup">SignUp</Link>
        </li>,
      ];
    }
  };
  return (
    <nav className="main">
      <div className="nav-wrapper ">
        <Link to={state ? "/" : "/login"} className="brand-logo left">
          LiveTwice
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
}
