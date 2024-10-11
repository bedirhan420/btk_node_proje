const express = require("express")
const app = require 
const indexRouter = require("./routes/index");
const mongoose = require("mongoose")
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api",indexRouter);

app.listen(PORT,()=>{console.log(`Server is running on : http://localhost:${PORT} `)})