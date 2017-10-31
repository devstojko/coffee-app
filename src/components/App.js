import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";

import appCointainer from "../containers/appContainer";
import detailsContainer from "../containers/detailsContainer";

import NotFound from "../components/NotFound";
import ErrorMessage from "../components/ErrorMessage";

class App extends Component {


  render() {
    return (
      <div>
        <Switch>
          <Route path="/error" exact component={ErrorMessage} />

          <Route path="/details/:id" exact component={detailsContainer} />
          <Route path="/" component={appCointainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
