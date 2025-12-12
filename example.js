require("dotenv").config(); // To load env files

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("My week 2 API!"));

app.post("/userr", (req, res) => {
const { name, email } = req.body;
if (!name || !emall) return res.status(400).json({ error: "Missing fields" });

// To simulate the DB save

res.status(201).json({ message: 'Hello: $(name) ($(email))' });
});

app.get("/user/:id", (req, res) => {
     res.json({ id: req.params.id, name: "Great Man Power" }); });

app.listen(3000, () => console.log('API live on port 3000'));
