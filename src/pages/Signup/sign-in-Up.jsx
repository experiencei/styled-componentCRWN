import React from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";
import "./sign-in-Up.scss";

export default function SigninUp() {
    return (
        <div className="signinup">
          <Signin/> 
          <Signup/> 
        </div>
    )
}
