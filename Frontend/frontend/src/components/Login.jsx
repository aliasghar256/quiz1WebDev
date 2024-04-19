import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios({
        url: "http://localhost:5000/user/login",
        method: "post",
        data: { email, password },
      });
      window.alert(res.data.Message);
    } catch (e) {
      window.alert("ERROR");
      console.error(e);
    }
  };

  return (
    <div className="auth-form-container">
      <img src="/plllogo.png" className="logo" alt="" />
      <form className="form" onSubmit={loginSubmit}>
        <label for="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ali@gmail.com"
          id="email"
        />
        <label for="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder=""
          id="password"
        />
        <button>Log in</button>
        <span>
          Don't have an account? Register{" "}
          <button
            className="link-button"
            onClick={() => props.onFormSwitch("Register")}
          >
            here
          </button>
        </span>
      </form>
    </div>
  );
};
