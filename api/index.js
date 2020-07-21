const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "developer",
    password: "193822979!@#",
    database: "messagingapp",
  },
});

const sendMessage = (senderId, recipientId, title, message) =>
  knex("messages").insert({ senderId, recipientId, title, message });

const listMessages = () =>
  knex.select("id", "recipientId", "title", "message").from("messages");
