import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Quotes from "./pages/quotes";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import NoMatch from "./pages/no-match";


export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={About} />
              <Route path="/quotes" component={Quotes} />
              <Route path="/contact" component={Contact} />
              <Route path="/donate" component={Donate} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
