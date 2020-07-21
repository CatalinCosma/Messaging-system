import axios from "axios";
import { getAuthToken } from "./session";

export const listMessages = async () => {
  const result = await axios.get("http://localhost:8080/messages", {
    headers: { authToken: getAuthToken() },
  });
  return result.data;
};

export const sendMessage = (recipientEmail, title, message) =>
  axios.post(
    "http://localhost:8080/messages",
    {
      recipientEmail,
      title,
      message,
    },
    {
      headers: { authToken: getAuthToken() },
    }
  );
