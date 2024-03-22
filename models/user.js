const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ["BusinessOwner", "User", "Admin"],
    default: "User",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
