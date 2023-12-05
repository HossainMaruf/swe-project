const express = require('express')
const router = express.Router();
const path = require('path')

router.get("/login", (req, res) => {
  // console.log(req);
  // res.send("Contact Page")
  res.sendFile(path.join(__dirname, "..","views", "Login.html"))
})
router.get("/register", (req, res) => {
  // console.log(req);
  // res.send("Contact Page")
  res.sendFile(path.join(__dirname, "..", "views", "Register.html"))
})

module.exports = router;