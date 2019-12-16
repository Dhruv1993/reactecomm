import React from "react";
import "./signin-and-signup.styles.scss";
import SignIn from "../../Components/sign-in/Sign-in.component";
import Signup from "../../Components/sign-up/Sign-up.component";

const SigninAndSignupPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SigninAndSignupPage;
