const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
const volleyball = require("volleyball");
const PORT = process.env.PORT || 3000;

// Routes
const authRoute = require("./routes/auth");

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(volleyball);
app.use(authRoute);

app.listen(PORT);
