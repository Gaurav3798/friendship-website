const express = require("express");
const Friendship = require("../models/Friendship");

const router = express.Router();

// TEST ROUTE
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Friendship route is working ❤️",
  });
});

// SAVE COMPLETE FRIENDSHIP
router.post("/approve", async (req, res) => {
  try {
    console.log("Approval request received ✅");
    console.log("Received data:", req.body);

    const {
      name,
      answers,
      quizAnswer,
      approved,
      message,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const friendship = new Friendship({
      name,
      answers: answers || [],
      quizAnswer: quizAnswer || "",
      approved: approved || false,
      message: message || "",
    });

    const savedFriendship = await friendship.save();

    console.log("Friendship saved ✅", savedFriendship);

    res.status(201).json({
      success: true,
      message: "Friendship data saved successfully ❤️",
      data: savedFriendship,
    });

  } catch (error) {
    console.error("Save Error ❌", error);

    res.status(500).json({
      success: false,
      message: "Failed to save friendship",
      error: error.message,
    });
  }
});

// GET ALL FRIENDSHIPS
router.get("/", async (req, res) => {
  try {
    const friendships = await Friendship.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: friendships.length,
      data: friendships,
    });

  } catch (error) {
    console.error("Fetch Error ❌", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch friendships",
    });
  }
});

module.exports = router;