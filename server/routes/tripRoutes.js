const express = require("express");

const router = express.Router();

const {
    createTrip
} = require("../controllers/tripController");

const db = require("../db");

// CREATE TRIP
router.post("/create", createTrip);

// GET ALL TRIPS (THIS WAS MISSING ❗)
router.get("/", (req, res) => {

    const sql = "SELECT * FROM trips";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database error"
            });
        }

        res.json(result);
    });
});

module.exports = router;