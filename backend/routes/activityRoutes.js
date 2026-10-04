const express = require("express");
const Activity = require("../models/Activity");

const router = express.Router();

// Save activity
router.post("/", async (req, res) => {
  try {
    const {
      name,
      page,
      action,
      value,
    } = req.body;

    if (!page || !action) {
      return res.status(400).json({
        success: false,
        message: "Page and action are required",
      });
    }

    const activity = new Activity({
      name: name || "Pallavi",
      page,
      action,
      value: value || "",
    });

    const savedActivity = await activity.save();

    res.status(201).json({
      success: true,
      message: "Activity saved",
      data: savedActivity,
    });
  } catch (error) {
    console.error("Activity Save Error ❌", error);

    res.status(500).json({
      success: false,
      message: "Failed to save activity",
    });
  }
});

// Get all activities
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find().sort({
      createdAt: 1,
    });

    res.json({
      success: true,
      count: activities.length,
      data: activities,
    });
  } catch (error) {
    console.error("Activity Fetch Error ❌", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch activities",
    });
  }
});

module.exports = router;