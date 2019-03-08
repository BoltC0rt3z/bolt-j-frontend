import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Signup from "./components/container/Auth/Signup";
import Signin from "./components/container/Auth/SignIn";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
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
