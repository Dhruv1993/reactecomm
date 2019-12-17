import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage.component";
import "./App.css";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.componenet";
import SigninAndSignupPage from "./Pages/Signin-and-Signup-page/signin-and-signup.component";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.action";
/**
 *Switch will match the route / first and will not match anything else after that if you don't use exact
 */

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())
          this.props.setCurrentUser({
            id: snapShot.id,
            // this will spread the data from snapshot like displayName, email, createdAt
            ...snapShot.data()
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninAndSignupPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// this will receive the details once it is pickup by the dispatch
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

// this will send the currentuser details to the redux
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
