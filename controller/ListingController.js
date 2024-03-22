const Listing = require('../models/Listing');

// Create a new listing
exports.createListing = async (req, res) => {
  try {
    const { name, phone, city, address, images } = req.body;
    const listing = new Listing({ name, phone, city, address, images, owner: req.user._id });
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({ owner: req.user._id });
    res.json(listings);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a listing
exports.updateListing = async (req, res) => {
  try {
    const { name, phone, city, address, images } = req.body;
    const listing = await Listing.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      { name, phone, city, address, images },
      { new: true }
    );

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a listing
exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findOneAndDelete({ _id: req.params.id, owner: req.user._id });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.json({ message: 'Listing deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = exports;
