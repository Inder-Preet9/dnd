const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 5000; // backend port

app.use(cors());
app.use(bodyParser.json());

// In-memory user storage (for testing)
const users = [];

// Secret key for JWT
const SECRET = "mysecretkey";

// REGISTER
app.post("/api/auth/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Missing fields" });

  const existingUser = users.find(u => u.username === username);
  if (existingUser) return res.status(400).json({ error: "Username already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.json({ message: "User registered successfully" });
});

// LOGIN
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ error: "Invalid username or password" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: "Invalid username or password" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

const sweetsRoutes = require("./routes/sweets");
app.use("/api/sweets", sweetsRoutes);
