const express = require("express");
const router = express.Router();
const app = express();
router.use((req, res, next) => {
  console.log("Hello from route middleware in userRoutes.js");
  next();
});

router.get("/profile", (req, res) => {
  res.send("User Profile");
});

router.post("/register", (req, res) => {
  res.send("Register New User");
});

module.exports = router; 
