// app.js
const express = require("express");
const path = require("path");
const app = express();
const userRoutes = require("./routers/sign");
require("dotenv").config();
const dataBase = require("./config/connection");
const cookie = require("cookie-parser")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookie());

app.use("/", userRoutes);

app.listen(3000)
    
