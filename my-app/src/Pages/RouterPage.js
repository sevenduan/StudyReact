import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">Home Page</Link>
          <Link to="/test">Test Page</Link>
          <Switch>
            <Route
              exact
              path="/"
              component={HomePage} //
              // children={() => <div>children</div>} //children is high priority
              render={() => <div>render</div>} // lowest children>component>render
            ></Route>
            <Route exact path="/test" component={TestPage}></Route>
            <Route component={EmptyPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

class TestPage extends Component {
  render() {
    return (
      <div>
        <h3>Test Page</h3>
      </div>
    );
  }
}

//cch
class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>404 not found</h3>
      </div>
    );
  }
}
