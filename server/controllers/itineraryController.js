const db = require("../db");

// Add Stop
const addStop = (req, res) => {

    const {
        trip_id,
        city_id,
        arrival_date,
        departure_date
    } = req.body;

    if (
        !trip_id ||
        !city_id ||
        !arrival_date ||
        !departure_date
    ) {
        return res.status(400).json({
            message: "All fields required"
        });
    }

    const query =
        "INSERT INTO trip_stops (trip_id, city_id, arrival_date, departure_date) VALUES (?, ?, ?, ?)";

    db.query(
        query,
        [
            trip_id,
            city_id,
            arrival_date,
            departure_date
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database Error"
                });
            }

            return res.status(201).json({
                message: "Stop added successfully"
            });
        }
    );
};

// Get Stops
const getStops = (req, res) => {

    const query = `
        SELECT
            trip_stops.id,
            cities.city_name,
            cities.country,
            trip_stops.arrival_date,
            trip_stops.departure_date
        FROM trip_stops
        JOIN cities
        ON trip_stops.city_id = cities.id
        ORDER BY arrival_date ASC
    `;

    db.query(query, (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                message: "Database Error"
            });
        }

        return res.status(200).json(result);
    });
};

module.exports = {
    addStop,
    getStops
};