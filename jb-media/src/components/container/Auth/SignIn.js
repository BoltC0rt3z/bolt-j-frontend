import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/loginAction";
import SigninForm from "../../Auth/SigninForm";
import { ToastContainer } from 'react-toastify';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const userData = {
      user: {
        email: email,
        password: password
      }      
    };

    this.props.loginUser(userData);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <SigninForm
          email={email}
          password={password}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
        />
        <ToastContainer />
      </div>
    );
  }
}


export const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(loginUser, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
