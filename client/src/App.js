import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import mybooks from "./pages/mybooks";
import Nav from "./components/Nav";
import PasswordReset from "./pages/PasswordReset";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import discussion from "./pages/discussion";

function App () {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mybooks" component={mybooks} />
          <Route exact path="/passwordreset" component={PasswordReset} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/discussion" component={discussion} />
        </Switch>
      </div>
    </Router>
  );}

export default App;
