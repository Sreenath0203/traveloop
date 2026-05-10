const express = require("express");

const router = express.Router();

const {
    getRecommendation
} = require("../controllers/aiController");

router.get("/", getRecommendation);

module.exports = router;