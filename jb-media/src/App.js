import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./layout/Navbar"
import Signup from "./components/container/Auth/Signup";
import Signin from "./components/container/Auth/SignIn";
import "./assets/css/auth.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
