const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const loanRoutes = require("./routes/loanRoutes");
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes);
app.get("/", (req, res) => res.send(""));
console.log(process.env.SECRET_KEY);
mongoose
  .connect("mongodb+srv://kavikkannank:UkC3R51Gzkld6n2w@kavikkannan.w4uqvp5.mongodb.net/?retryWrites=true&w=majority&appName=kavikkannan")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  