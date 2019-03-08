import React from "react";
import { Component } from "react";
import "../../assets/css/auth.css";
class SignUpForm extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      username,
      email,
      password
    } = this.props;
    return (
      <div class="main">
        <div class="container">
          <form
            onSubmit={handleSubmit}
            class="appointment-form"
            id="appointment-form"
          >
            <h2 align="center">Register</h2>
            <div class="form-group-1">
              <input
                type="text"
                name="username"
                value={username}
                id="name"
                onChange={handleChange}
                placeholder="username"
                required
              />

              <input
                type="email"
                name="email"
                value={email}
                id="email"
                onChange={handleChange}
                placeholder="Email"
                required
              />

              <input
                type="password"
                name="password"
                value={password}
                id="password"
                onChange={handleChange}
                placeholder="Enter password"
                required
              />

              <input
                type="submit"
                name="submit"
                id="submit"
                class="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
