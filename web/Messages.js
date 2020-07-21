import React, { Component } from "react";
import { listMessages, sendMessage } from "./MessagingApp";
import { deleteUser, deleteAuthToken } from "./session";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      messageValue: "",
      messageList: [],
      recipientValue: "",
    };
  }

  async componentDidMount() {
    const messageList = await listMessages();
    this.setState({ messageList });
  }

  onRecipientChange = (event) => {
    const recipientValue = event.target.value;
    this.setState({ recipientValue });
  };

  onTitleChange = (event) => {
    const titleValue = event.target.value;
    this.setState({ titleValue });
  };

  onMessageChange = (event) => {
    const messageValue = event.target.value;
    this.setState({ messageValue });
  };

  onClick = async (event) => {
    await sendMessage(
      this.state.recipientValue,
      this.state.titleValue,
      this.state.messageValue
    );
    const listMsg = await listMessages();
    this.setState({
      listMsg,
      recipientValue: "",
      titleValue: "",
      messageValue: "",
    });
  };

  logOut = () => {
    deleteUser();
    deleteAuthToken();
    this.props.history.push("/signIn");
  };

  render() {
    return (
      <div className="containerMesseges">
        <h1 className="titleForMesseges">Send Your Message</h1>
        <input
          className="input"
          type="text"
          placeholder="Email"
          value={this.state.recipientValue}
          onChange={this.onRecipientChange}
        />

        <input
          className="input"
          type="text"
          placeholder="Title"
          value={this.state.titleValue}
          onChange={this.onTitleChange}
        />

        <textarea
          className="textInput"
          id="message"
          placeholder="Message"
          rows="10"
          value={this.state.messageValue}
          onChange={this.onMessageChange}
        ></textarea>
        <button className="sendMessageButton" onClick={this.onClick}>
          Send
        </button>
        <button className="longOutButton" onClick={this.logOut}>
          LogOut
        </button>

        {this.state.messageList.map((message) => {
          return (
            <div className="messageBox" key={message.id}>
              <p className="messageText">
                <span className="info">From: </span>
                {message.email}
              </p>
              <p className="messageText">
                <span className="info">Title: </span> {message.title}
              </p>
              <p className="messageText">
                <span className="info">Message: </span>
                {message.message}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Messages;
