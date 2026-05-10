const db = require("../db");

// AI Recommendation
const getRecommendation = (req, res) => {

    const {
        budget,
        interest
    } = req.query;

    let query = `
        SELECT *
        FROM cities
        WHERE average_cost <= ?
    `;

    // Match Interest
    if (interest) {

        query += `
            AND category = '${interest}'
        `;
    }

    query += `
        ORDER BY average_cost ASC
        LIMIT 3
    `;

    db.query(query, [budget], (err, result) => {

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
    getRecommendation
};