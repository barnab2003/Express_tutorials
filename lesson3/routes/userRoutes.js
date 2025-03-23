const express = require("express");
const router = express.Router();



router.get("/profile", (req, res) => {
  res.send("User Profile");
});

router.post("/register", (req, res) => {
  res.send("Register New User");
});

module.exports = router; 
