import "./SignUpStyles.css";
import React, { useState } from "react";

function LogIn() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  };

  //submitting the data to a backend server

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('https://example.com/submit-form.php', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(form)
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((response) => {
        if (response.ok) {
          console.log("Sign Up successful");
        } else {
          console.log("Sign up failed");
        }
      })
      .catch((error) => {
        console.error("Sign up error", error);
      });
  };

  return (
    <div className="auth-form-container">
      <form className="sign-up" onSubmit={handleSubmit}>
        <h1 className="signupTitle">Log In</h1>

        <div className="inputContainer">
          <input
            className="input"
            value={form.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
          />
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>

        <div className="inputContainer">
          <input
            className="input"
            value={form.password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
        </div>

        <input type="submit" className="submitBtn" value="Log In" />
      </form>

      <i>
        Don't have an account? <a href="/signup">SignUp</a>
      </i>
    </div>
  );
}

export default LogIn;
