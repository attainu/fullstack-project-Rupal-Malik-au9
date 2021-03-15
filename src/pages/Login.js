import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="myCard">
      <div className="card  Login">
        <div className="card-content ">
          <span className="card-title">Live Twice</span>

          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="btn waves-effect waves-light">Login</button>
          <h5>
            <a href="#">Don't have an account?</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
