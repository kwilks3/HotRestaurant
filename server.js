const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var tables = [];
var waiting = [];

const port = process.env.PORT || 8000;

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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
