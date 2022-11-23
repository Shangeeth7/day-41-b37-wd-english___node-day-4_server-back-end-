const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const mongodbConnection = require("./config/mongodbConnection");
const port = process.env.PORT || 3110;
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.get("/", (req, res) =>
  res.send("This is Backend Server for Deployment practise")
);
app.listen(port, () => console.log(`Node JS Server Running On Port ${port}!`));
