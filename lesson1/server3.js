const express = require("express"); 
const app = express(); 
const PORT = 3000;

/*
app.get("/search", (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Searching for: ${keyword}`);
  });
  http://localhost:3000/search?keyword=NodeJS
  */
  app.get("/filter", (req, res) => {
    const category = req.query.category;
    const price = req.query.price;
    res.send(`Filtering by Category: ${category}, Price: ${price}`);
  });
  //http://localhost:3000/filter?category=books&price=500

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
