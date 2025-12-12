require('dotenv').config;

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;


// Serve static files
app.use(express.static(path.join(_dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {

res.sendFile(path.join(_dirname, 'index.html'));
});

app.listen(PORT, () => {

console.log('Server running on http://localhost:$(PORT)');
});