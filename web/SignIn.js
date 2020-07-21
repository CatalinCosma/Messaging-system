import React, { Component } from "react";
import { signIn } from "./senders";
import { setSender, setAuthToken } from "./session";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  signIn = async () => {
    try {
      const { sender, authToken } = await signIn(
        this.state.email,
        this.state.password
      );

      setSender(sender);
      setAuthToken(authToken);
      this.props.history.push("/messages");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  render() {
    return (
      <div className="containerSignIn">
        <span>
          <h1 className="title">Sign In</h1>
        </span>

        <div className="formBox">
          <input
            className="input"
            type="email"
            placeholder="Email"
            email="email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            password="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
        </div>
        <div>
          <button className="logInButton" onClick={this.signIn}>
            LogIn
          </button>
          <p className="signUp">
            DON'T HAVE AN ACCOUT? <span> </span>
            <a href="http://localhost:3000/SignUp" className="link">
              SIGN UP
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
