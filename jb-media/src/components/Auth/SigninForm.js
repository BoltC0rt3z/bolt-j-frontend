import React, { Component } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/css/auth.css";

export default class SigninForm extends Component {
  
  notify = () => {
    // toast.success("Login Success");
  }
  // notify = () => toast("Wow so easy !");
  render() {
    const {
      email,
      password,
      onChange,
      handleSubmit
    } = this.props;

    return (
      <div class="signup-page">
        <div class="main">
          <div class="fom-container">
            <form onSubmit={handleSubmit} class="appointment-form" id="appointment-form">
              <h2  align="center" >Login</h2>
              <div class="form-group-1">
                <input
                  type="email"
                  value={email}
                  onChange={onChange}
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={onChange}
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="form-submit">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  class="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
