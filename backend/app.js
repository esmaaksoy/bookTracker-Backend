"use strict";

const express = require("express");
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 8000;

app.use(express.json())
require('express-async-errors')

app.use(require("./routes/book.router"))
app.use(require('./errorHandler'))

app.listen(PORT, () => console.log("Running " + PORT))