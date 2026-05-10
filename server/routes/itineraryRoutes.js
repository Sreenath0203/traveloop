const express = require("express");

const router = express.Router();

const {
    addStop,
    getStops
} = require("../controllers/itineraryController");

// Add Stop
router.post("/add", addStop);

// Get Stops
router.get("/", getStops);

module.exports = router;