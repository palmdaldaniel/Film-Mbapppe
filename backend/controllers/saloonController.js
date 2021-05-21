const Saloon = require("../models/Saloon");

const addSaloon = async (req, res) => {
  let newSaloon = await Saloon.create(req.body);
  await newSaloon.save();
  res.json(newSaloon);
};

const getAllSaloons = async (req, res) => {
  let saloon = await Saloon.find().exec();
  res.json(saloon);
  return;
};

const removeSaloon = async (req, res) => {
  try {
    let exists = await Saloon.exists({ _id: req.params.saloonId });
    if (exists) {
      await Saloon.deleteOne({ _id: req.params.saloonId }).exec();
      res.json({
        message: `Saloon with id ${req.params.saloonId} has been deleted.`,
      });
      return;
    }
  } catch (error) {
    res
      .status(404)
      .json({ error: `Saloon with id ${req.params.saloonId} does not exist.` });
    return;
  }
};

const getSaloonById = async (req, res) => {
  Saloon.findById(req.params.saloonId).exec((err, saloon) => {
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }
    if (!saloon) {
      res
        .status(404)
        .json({ error: `Saloon with id ${req.params.saloonId} does not exist` });
      return;
    }

    res.json(saloon);
  });
};

module.exports = {
  addSaloon,
  getAllSaloons,
  removeSaloon,
  getSaloonById
}