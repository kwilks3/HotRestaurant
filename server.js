const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tablesApi = [];
var waitlistApi = [];

const port = process.env.PORT || 8000;

// view routes
app.get("/", (req, res) => {
    console.log("home");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", (req, res) => {
    console.log("tables");
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", (req, res) => {
    console.log("reservations");
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// api post routes
app.post("/waitlistapi", (req, res) => {
    res.json(waitlistApi);
});

app.post("/tablesapi", (req, res) => {
    res.json(tablesApi);
});

// api get routes
app.get("/waitlistapi", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tablesapi", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
