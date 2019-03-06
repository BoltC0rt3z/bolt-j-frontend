import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Signup from "./components/container/Auth/Signup";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
