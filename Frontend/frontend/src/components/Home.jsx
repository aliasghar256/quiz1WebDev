import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { useState } from "react";
import Header from "./Header";
// import Awards from "./awards/Awards";
// import Featured from "./featured/Featured";
// import Hero from "./hero/Hero";
// import Location from "./location/Location";
// import Price from "./price/Price";
// import Recent from "./recent/Recent";
// import Team from "./team/Team";

const Home = () => {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    // <Header>
    <div className="App">
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
    // </Header> */}
  );
};

export default Home;
