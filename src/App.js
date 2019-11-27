import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage.component";
import "./App.css";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.componenet";
import SigninAndSignupPage from "./Pages/Signin-and-Signup-page/signin-and-signup.component";
import { auth } from "./Firebase/Firebase.utils";

/**
 *Switch will match the route / first and will not match anything else after that if you don't use exact
 */

class App extends Component {
  state = {
    currentUser: null
  };

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
