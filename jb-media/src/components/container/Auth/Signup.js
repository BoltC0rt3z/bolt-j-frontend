import React from 'react';
import{ Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import SignUpForm  from "../../../components/Auth/signUp";
import { registerUser } from "../../../actions/SignupActions";

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            user: {
              username: "",
              email: "",
              password: ""
            },
            errors: {
              usernameError: "",
              emailError: "",
              passwordError: ""
            },
            submitted: false,
            // shown: false
          };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          ...this.state,
          user: {
            ...this.state.user,
            [name]: value
          },
          submitted: false
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const { user } = this.state;
            this.props.registerUser(user);
        
      };

    render(){
        const { user } = this.state;
        return (
            <SignUpForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                username={user.username}
                email={user.email}
                password={user.password}
            />
        );
    };
};

const mapDispatchToProps = (dispatch) =>({
    registerUser: user => dispatch(registerUser(user))
});
export default connect(null, mapDispatchToProps)(Signup);
