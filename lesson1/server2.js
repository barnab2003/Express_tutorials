const express = require('express');
const app = express();
const port = 3000;
/*
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
*/
app.get("/user/:id/post/:postId", (req, res) => {
    res.send(`User ID: ${req.params.id}, Post ID: ${req.params.postId}`);
  });
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
