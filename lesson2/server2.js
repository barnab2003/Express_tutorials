const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const path = require("path");

app.get('/',(req,res) => {
    res.send('hello world')  
  })

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
/*
app.get("/index", (req, res) => {
    res.sendFile('views/index.html',{ root: _dirname });
  });
  */

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

