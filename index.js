const express = require("express")
const app = require 
const indexRouter = require("./routes/index");
const DataBase = require("./Db/DataBase")
require("dotenv").config();

const database = new DataBase()
database.connect(process.env.MONGO_URI)

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api",indexRouter);

app.listen(PORT,()=>{console.log(`Server is running on : http://localhost:${PORT} `)})