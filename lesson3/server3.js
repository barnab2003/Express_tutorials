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
    //console.log(req.headers);
    req.barnab= "loves Leena"; //could be accessed anywhere
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
    
  });
app.use((req, res, next) => {
    console.log(`hello middle ware2`);
    next(); 
  });

const userRoutes = require("./routes/userRoutes");
  app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

app.get("/about", (req, res) => {
  res.send("Barnab"+ req.barnab);//access req from middleware
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/* An Express application can use the following types of middleware:

Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware*/