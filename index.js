const express = require("express")
const app = require 
const indexRouter = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api",indexRouter);

app.listen(PORT,()=>{console.log(`Server is running on : http://localhost:${PORT} `)})