require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

//Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)

  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Could not connect to the Database", err));

//Routes
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
