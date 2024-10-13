const express = require("express")
const app = express();
const indexRouter = require("./routes/index");
const mongoose = require("mongoose")
require("dotenv").config();
const errorHandler = require("./middlewares/error");

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

app.use(errorHandler);
app.use("*",(req,res,next)=>{
  res.status(500).json("Error");
})

app.listen(PORT,()=>{console.log(`Server is running on : http://localhost:${PORT} `)})