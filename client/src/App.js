import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Jumbotron from "./components/jumbotron";
import NavBar from "./components/Nav";
import Books from "./pages/Books";
import Stylesheet from "./components/Stylesheet";



function App() {
  return (
    <Router>
      <div>
        <Stylesheet />
        <NavBar/>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Books}/>
          <Route exact path="/saved" component={Books}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
