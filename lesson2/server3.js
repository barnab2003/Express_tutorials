const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

const PORT = 3000; 

app.use("/user", userRoutes); 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
