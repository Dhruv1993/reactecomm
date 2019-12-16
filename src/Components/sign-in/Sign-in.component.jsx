import React, { Component } from "react";
import FormInput from "../Form-input/Form-input.component";
import "./Sign-in.styles.scss";
import Custombutton from "../Custom-button/Custom-button.component";

import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    // destructure the email and password
    const { email, password } = this.state;

    // use signinwithemailandpassword from auth google

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <Custombutton type="submit">Sign In</Custombutton>
            <Custombutton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Custombutton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
