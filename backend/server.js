const express = require("express");
const app = express();
const taskRoute = require("./routes/taskRoute");
const connectDB = require("./config/connectDB");

//middelwares
app.use(express.json());
//connect db
connectDB();
app.use("/task",taskRoute);
// start server
const port = process.env.PORT || 5000;

app.listen(port, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${port}!`)
);


