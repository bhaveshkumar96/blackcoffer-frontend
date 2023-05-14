require("dotenv").config();
const express = require("express");
const { connection } = require("./configs/config");
const { dataRouter } = require("./routes/data.route");
const app = express();

app.use(express.json());
app.use("/data",dataRouter)
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`running at port ${process.env.PORT}`);
});
