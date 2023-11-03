const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const employeeRoutes = require("./routes/route");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/api/employees", employeeRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/kitkat_pro", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(3007, () => {
  console.log(`Server is running on port `);
});

module.exports = app;
