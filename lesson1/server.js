const express = require("express"); // Import Express
const app = express(); // Create an Express application

const PORT = 3000; // Define a port

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  res.send("Form Submitted");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//node server.js
