const express = require("express");

const router = express.Router();

const {
    getBudget
} = require("../controllers/budgetController");

// Get Budget
router.get("/", getBudget);

module.exports = router;