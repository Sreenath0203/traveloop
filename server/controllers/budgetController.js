const db = require("../db");

// Get Budget Breakdown
const getBudget = (req, res) => {

    const query = `
        SELECT
            category,
            SUM(amount) AS total
        FROM expenses
        GROUP BY category
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
    getBudget
};