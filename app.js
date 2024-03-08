"use strict";

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "https://book-tracker-frontend-five.vercel.app/" }));

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
require("express-async-errors");

app.use(require("./routes/book.router"));
app.use(require("./errorHandler"));


app.listen(PORT, () => console.log("Running " + PORT));
