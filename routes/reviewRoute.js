const express = require("express");
const router = express.Router();
const reviewController = require("../controller/ReviewController");

// Create a new review
router.post("/reviews", reviewController.createReview);

//get a review
router.get("/reviews", reviewController.getReview);
// Update a review
router.put("/reviews/:reviewId", reviewController.updateReview);

module.exports = router;
