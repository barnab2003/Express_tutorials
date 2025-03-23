const express = require("express"); 
const app = express(); 
const PORT = 3000; 

app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/submit", (req, res) => {
    const { name, email } = req.body;  
    res.send(`Received: ${name}, ${email}`);
  });

app.put("/update/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`Updating user with ID: ${userId}`);
  });
  
app.delete("/delete/:id", (req, res) => {
    res.send(`Deleting user with ID: ${req.params.id}`);
  });
  
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});