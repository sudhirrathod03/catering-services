import Caterer from "../models/Caterer.js";

// get all caterers
export const getAllCaterers = async (req, res) => {
  try {
    const caterers = await Caterer.find();
    res.status(200).json(caterers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get details of specific caterers
export const getCatererById = async (req, res) => {
  try {
    const caterer = await Caterer.findById(req.params.id);
    if (!caterer) return res.status(404).json({ message: "Caterer not found" });
    res.status(200).json(caterer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//post new caterers
export const createCaterer = async (req, res) => {
  const { name, location, pricePerPlate, cuisines, rating } = req.body;

  if (!name || !location || !pricePerPlate || !cuisines) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  const newCaterer = new Caterer({
    name,
    location,
    pricePerPlate,
    cuisines,
    rating,
  });

  try {
    await newCaterer.save();
    res.status(201).json(newCaterer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
