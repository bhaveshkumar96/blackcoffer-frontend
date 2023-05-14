const express = require("express");
const { DataModel } = require("../model/data.model");

const dataRouter = express.Router();

dataRouter.get("/", async (req, res) => {
  try {
    let data = await DataModel.find();
    res.send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = {
    dataRouter
}