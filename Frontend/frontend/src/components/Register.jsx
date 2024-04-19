import React, { useState } from "react";
import axios from "axios";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios({
        url: "http://localhost:5000/user/sign-up",
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
      <form className="form" onSubmit={registerSubmit}>
        <label for="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Ali"
          id="name"
        />
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
        <button>Register</button>
        <span>
          Already have an account? Log in{" "}
          <button
            className="link-button"
            onClick={() => props.onFormSwitch("Login")}
          >
            here
          </button>
        </span>
      </form>
    </div>
  );
};
