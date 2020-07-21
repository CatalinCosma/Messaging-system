import React, { Component } from "react";
import { signUp } from "./senders";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  signUp = async () => {
    await signUp(this.state.name, this.state.email, this.state.password);
    this.props.history.push("/signIn");
  };

  render() {
    return (
      <div className="containerSingUp">
        <h1 className="title">Sign Up</h1>
        <input
          className="input"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          className="input"
          type="email"
          email="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          className="input"
          type="password"
          password="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button className="SingUpButton" onClick={this.signUp}>
          SignUp
        </button>

        <p className="signUp">
          ALREADY HAVE AN ACCOUT? <span> </span>
          <a href="http://localhost:3000/SignIn" className="link">
            SIGN IN
          </a>
        </p>
      </div>
    );
  }
}

export default SignUp;
