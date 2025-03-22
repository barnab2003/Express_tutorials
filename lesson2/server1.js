const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));  // Parses JSON payloads
//app.use(express.urlencoded({ extended: true })); // Parses form data

/*
app.post('/',(req,res) => {
  console.log("hey its a post request")
  res.send('hello world')
  
})

app.put('/',(req,res) => {
  console.log("hey its a put request")
  res.send('hello world put')
  
});

app.delete("/delete/:id", (req, res) => {
  res.send(`Deleting user with ID: ${req.params.id}`);
});

*/
//chaining
app.post('/',(req,res) => {
  console.log("hey its a post request")
  res.send('hello world')  
}).put('/',(req,res) => {
console.log("hey its a put request")
res.send('hello world put')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

