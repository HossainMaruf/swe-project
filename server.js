// Need Dependencies
const path = require('path') 
const ejs = require('ejs');
const express = require('express')
const app = express();

// import the controller
const authController = require('./controllers/AuthController');

// Templating Engine
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
  // console.log(req);
  // res.send(" <table border='1'> <tr> <td>DOMEJrjelkrj</td> </tr> </table> ") })
  // res.sendFile(path.join(__dirname, "views", "Home.html"))
  res.render('Demo');
})

app.get("/about", (req, res) => {
  // console.log(req);
  // res.send("<h1>About Page</h1>")
  res.sendFile(path.join(__dirname, "views", "About.html"))
})
app.get("/contact", (req, res) => {
  // console.log(req);
  // res.send("Contact Page")
  res.sendFile(path.join(__dirname, "views", "Contact.html"))
})
app.use('/', authController);

app.get("*", (req, res) => {
  // console.log(req);
  // res.send("404 Page")
  res.sendFile(path.join(__dirname, "views", "404.html"))
})



app.listen(5000); // creating the server + run