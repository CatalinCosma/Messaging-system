const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("./database");
const accessToken = require("./accessToken");
const authMiddleware = require("./authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signUp", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 4);
  await database.createUser(name, email, hashedPassword);
  res.json();
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;

  const sender = await database.findUserByEmail(email);
  if (!sender) {
    res.status(401).json({ alert: "Invalid credentials" });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, sender.password);
  if (!isPasswordCorrect) {
    res.status(401).json({ alert: "Invalid credentials" });
    return;
  }

  const authToken = accessToken.createAccessToken(sender);
  res.json({ authToken, sender });
});

app.get("/messages", authMiddleware, async (req, res) => {
  const messages = await database.listMessages(req.sender.id);
  res.json(messages);
});

app.post("/messages", authMiddleware, async (req, res) => {
  const { recipientEmail, title, message } = req.body;
  await database.sendMessage(req.sender.id, recipientEmail, title, message);
  res.json();
});

app.listen(8080);
