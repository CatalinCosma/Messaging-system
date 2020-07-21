const config = require("./config");
const knex = require("knex")(config);

exports.createUser = (name, email, password) =>
  knex("users").insert({ name, email, password });

exports.findUserByEmail = async (email) => {
  const users = await knex
    .select("id", "name", "email", "password")
    .where({ email })
    .from("users");

  if (users.length === 0) return undefined;
  else return users[0];
};

exports.listMessages = (recipientId) =>
  knex
    .select(
      "message.id",
      "message.senderId",
      "message.title",
      "message.message",
      "user.email"
    )
    .leftJoin("users as user", "user.id", "message.senderId")
    .where({ recipientId })
    .from("messages as message");

exports.sendMessage = async (senderId, recipientEmail, title, message) => {
  const recipient = await knex
    .select("id")
    .where({ email: recipientEmail })
    .from("users");

  return knex("messages").insert({
    senderId,
    recipientId: recipient[0].id,
    title,
    message,
  });
};
