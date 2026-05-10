const db = require("../db");

// Create Trip
const createTrip = (req, res) => {

    const {
        user_id,
        trip_name,
        description,
        start_date,
        end_date
    } = req.body;

    // Validation
    if (
        !user_id ||
        !trip_name ||
        !start_date ||
        !end_date
    ) {
        return res.status(400).json({
            message: "All required fields must be filled"
        });
    }

    const query =
        "INSERT INTO trips (user_id, trip_name, description, start_date, end_date) VALUES (?, ?, ?, ?, ?)";

    db.query(
        query,
        [
            user_id,
            trip_name,
            description,
            start_date,
            end_date
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            return res.status(201).json({
                message: "Trip created successfully"
            });
        }
    );
};

module.exports = {
    createTrip
};