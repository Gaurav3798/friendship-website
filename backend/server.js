
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const friendshipRoutes = require("./routes/friendshipRoutes");
const activityRoutes = require("./routes/activityRoutes");

const app = express();

// ===============================
// Middleware
// ===============================
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// ===============================
// Test Route
// ===============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "💕 Pallavi Friendship Backend is running!",
  });
});

// ===============================
// Friendship API Routes
// ===============================
app.use("/api/friendship", friendshipRoutes);

// ===============================
// Activity API Routes
// ===============================
app.use("/api/activity", activityRoutes);

// ===============================
// MongoDB Connection
// ===============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed ❌");
    console.error(error.message);
  });