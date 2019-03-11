// /* eslint-disable indent */
// import React from "react";
// import { Component } from "react";
// import { NavLink } from "react-router-dom";
// import Signup from "../components/container/Auth/Signup";
// // import RegistrationModal from "../containers/registration/Registration";
// import SignIn from "../components/container/Auth/SignIn";
// // import Login from "../authentication/Login";
// // import DropDown from "./userOptions";

// // eslint-disable-next-line react/prefer-stateless-function
// class Navbar extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="ui inverted huge borderless fixed fluid menu">
//           <div className="header item link-button" id="logo">
//             <NavLink to="/">JB-media</NavLink>
//           </div>
//           <div className="right menu">
//             <div className="item">
//               <div className="ui icon input">
//                 <i className="search icon" />
//                 <input type="text" placeholder="Search..." />
//               </div>
//             </div>
//             {!localStorage.getItem("token") ||
//             localStorage.getItem("token") === undefined ? (
//               <React.Fragment>
//                 <button type="button" className="item link-button" id="login">
//                   <SignIn />
//                 </button>
//                 <button type="button" className="item link-button" id="signup">
//                   <Signup />
//                 </button>
//               </React.Fragment>
//             ) : (
//                 <div></div>
//             )}
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Navbar;


import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
  import Signup from "../components/container/Auth/Signup";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">JB-media</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="#">Profiles</NavLink>
              </NavItem>
                   <NavItem>
                        <NavLink href="#">Sign</NavLink>
                    </NavItem>
                     <NavItem>
                        <NavLink href="#">SignIn</NavLink>
                    </NavItem>
                
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}