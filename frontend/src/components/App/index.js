import React, { Component } from "react";
import CreateUser from "../CreateUser";
import EditUser from "../EditUser";
import Home from "../Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/users" component={CreateUser} />
          <Route path="/users/:userId" component={EditUser} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
