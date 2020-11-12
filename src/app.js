const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("Conexão feita com sucesso!")
})

const books = require("./routes/booksRoutes");
const employees = require("./routes/employeesRoutes");

app.use(express.json()); 

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/books", books);
app.use("/employees", employees);

module.exports = app;