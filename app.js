const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const listingRoutes = require("./routes/listingRoute");
const reviewRoutes = require("./routes/reviewRoute");
const userRoutes = require("./routes/userRoute");
const config = require("./middlewares/config");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api", listingRoutes);
app.use("/api", userRoutes);
app.use("/api", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
