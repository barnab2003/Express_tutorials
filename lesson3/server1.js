const express = require("express"); 
const app = express(); 

const PORT = 3000; 


app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

app.get("/user/:id/post/:postId", (req, res) => {
    res.send(`User ID: ${req.params.id}, Post ID: ${req.params.postId}`);
  });
  
app.use(express.static("public"));

app.use("/static", express.static("assets"));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
