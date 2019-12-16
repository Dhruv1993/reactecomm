import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage.component";
import "./App.css";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.componenet";
import SigninAndSignupPage from "./Pages/Signin-and-Signup-page/signin-and-signup.component";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

/**
 *Switch will match the route / first and will not match anything else after that if you don't use exact
 */

class App extends Component {
  state = {
    currentUser: null
  };

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user)
      if (userAuth) {
        
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
