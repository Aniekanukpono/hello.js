require("dotenv").config(); // Load env vars fron .env file

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("My week 2 API!"));

app.post("/register", (req, res) => {
const { name, email } = req.body;
if (!name || !emall) return res.status(400).json({ error: "Missing fields" });

// Simulate DB save

res.status(201).json({ message: 'Hello: $(name) ($(email))' });
});

app.get("/user/:id", (req, res) => {
     res.json({ id: req.params.id, name: "User[id]Profile" }); });

app.listen(3000, () => console.log('API live on port 3000'));