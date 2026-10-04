const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const friendshipRoutes = require("./routes/friendshipRoutes");
const activityRoutes = require("./routes/activityRoutes");

const app = express();

// ================================
// MIDDLEWARE
// ================================

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// ================================
// TEST ROUTE
// ================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "💕 Pallavi Friendship Backend is running!",
  });
});

// ================================
// FRIENDSHIP API
// ================================

app.use("/api/friendship", friendshipRoutes);

// ================================
// ACTIVITY API
// ================================

app.use("/api/activity", activityRoutes);

// ================================
// MONGODB CONNECTION
// ================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    // Render provides PORT automatically
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed ❌");
    console.error(error.message);

    process.exit(1);
  });