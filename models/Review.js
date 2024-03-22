const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  listing: { type: Schema.Types.ObjectId, ref: "Listing" },
  rating: Number,
  comment: String,
  response: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
