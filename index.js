const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const volleyball = require("volleyball");
const PORT = process.env.PORT;

// Routes
const authRoute = require("./routes/auth");

// mongoose.connect();

// Middlewares
app.use(morgan("dev"));
app.use(volleyball);
app.use(authRoute);

app.listen(PORT);
