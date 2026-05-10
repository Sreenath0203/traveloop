require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./db");

const authRoutes = require("./routes/authRoutes");
const tripRoutes = require("./routes/tripRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const aiRoutes = require("./routes/aiRoutes");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/ai", aiRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Traveloop API Running");
});

// Server START (KEEP AT END)
app.listen(5000, () => {
    console.log("Server running on port 5000");
});