import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sampleAction } from './actions/sampleAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Jay Bolt</h1>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(sampleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
