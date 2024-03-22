const Review = require("../models/Review");

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { userId, listingId, rating, comment } = req.body;

    // Check if the user has already reviewed the listing
    const existingReview = await Review.findOne({
      user: userId,
      listing: listingId,
    });
    if (existingReview) {
      return res
        .status(400)
        .json({ message: "User has already reviewed this listing" });
    }

    // Create a new review
    const newReview = new Review({
      user: userId,
      listing: listingId,
      rating,
      comment,
    });
    await newReview.save();

    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
};

exports.getReview = async (req, res) => {
  try {
    const getdata = await Review.find();
    res.status(200).json({ getdata });
  } catch (Error) {
    res.status(400).json({
        message:"Not found"
    })
  }
};

// Update a review
exports.updateReview = async (req, res) => {
  try {
    const { reviewId, rating, comment } = req.body;

    // Find the review by ID
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Update the review
    review.rating = rating;
    review.comment = comment;
    await review.save();

    res.json({ message: "Review updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = exports;
