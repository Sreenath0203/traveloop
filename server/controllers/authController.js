const db = require("../db");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {

    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    try {

        // Check Existing Email
        const checkQuery =
            "SELECT * FROM users WHERE email = ?";

        db.query(checkQuery, [email], async (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length > 0) {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }

            // Hash Password
            const hashedPassword =
                await bcrypt.hash(password, 10);

            // Insert User
            const insertQuery =
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

            db.query(
                insertQuery,
                [name, email, hashedPassword],
                (err, result) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    return res.status(201).json({
                        message: "User registered successfully"
                    });
                }
            );
        });

    } catch (error) {

        return res.status(500).json({
            message: "Server Error"
        });

    }
};

module.exports = {
    signup
};