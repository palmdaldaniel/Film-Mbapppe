const Showing = require("../models/Showing");

//only using createShowing function to test if getShowingById works
const createShowing = async (req, res) => {
  console.log(req.body);
  let newShowing = await Showing.create(req.body);
  await newShowing.save();
  res.json(newShowing);
}

const getShowingById = async (req, res) => {
  Showing.findById(req.params.showingId).populate('film saloon').exec(async (err, result) => {
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }

    if (!result) {
      res
        .status(404)
        .json({
          error: `Showing with id ${req.params.showingId} does not exist`,
        });
      return;
    }

    let showingWithPrice = {
      ...result.toObject(),
      pricePensioner: result.price * 0.8,
      priceChild: result.price * 0.7
    }

    res.json(showingWithPrice)

  });

};
const getShowingByDate = async (req, res) => {
  const { price, date } = req.query;
  let query = {}
  if (price) {
    query.price = price;
  }
  if (date) {
    query.date = date;
  }
  
  Showing.find(query).populate('film').sort('time').exec(async (err, result) => {
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }

    if (!result) {
      res
        .stataus(404)
        .json({
          error: `There are no showings for ${req.query.date}`,
        });
      return;
    }
    res.json(result);
  });

};

module.exports = {
  createShowing,
  getShowingById,
  getShowingByDate
};
