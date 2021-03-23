import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

export default function SignUp() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerData = () => {
    fetch("http://localhost:2000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          M.toast({ html: data.err, classes: "rounded" });
        } else {
          M.toast({ html: data.message, classes: "rounded" });
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main">
      <div className="card teal darken-2 ">
        <div className="card-content white-text">
          <span className="card-title">Continue to register</span>
        </div>
        <div className="card-action">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <center>
        <button
          className="btn waves-effect waves-light teal darken-2"
          onClick={() => registerData()}
        >
          Register
        </button>
        <h5>
          <Link to="/login">Already have an account?</Link>
        </h5>
      </center>
    </div>
  );
}
