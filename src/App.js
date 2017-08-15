import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ExhibitList from "./exhibit/ExhibitList";
import { Container } from "semantic-ui-react";
import Home from "./Home";
import ReactGA from "react-ga";

import { Router, Route, Switch } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";

import "./App.css";

ReactGA.initialize("UA-65004387-3");
function logPageView(location) {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
}

const history = createBrowserHistory();
history.listen((location, action) => {
  logPageView(location);
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Container fluid>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/exhibits" component={ExhibitList} />
            <Route component={Home} />
          </Switch>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
