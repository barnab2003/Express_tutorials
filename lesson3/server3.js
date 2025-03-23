const express = require("express"); 
const app = express(); 

const PORT = 3000; 

// middleware1
/*
app.use((req, res, next) => {
    console.log(`hello middle ware1`);
    res.send("hacked by mw1");
    next(); //comment it out
  });
*/
app.use((req, res, next)  => {
    console.log(req.headers);
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
    
  });
app.use((req, res, next) => {
    console.log(`hello middle ware2`);
    next(); 
  });


app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
