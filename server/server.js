const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

const connection = mysql.createPool({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "bc8d4b17087ebd",
    password: "9fb3e6e3",
    database: "heroku_004e2b0cd58beb1",
    multipleStatements: true
});

server.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
});

server.use(cors({origin: "*"}));

server.get("/", (req, res) => {
    connection.query("SELECT * FROM users", (error, rows) => {
        if (error) throw error;
        else {
            res.json(rows);
        }
    })
})

server.post("/submit", (req, res) => {
    let query = "INSERT INTO users(username, email, message) VALUES(?, ?, ?)";
    let user = [req.body.username, req.body.email, req.body.message];
    connection.query(query, user, (error, rows) => {
        if (error) console.log(error);
        else {
            res.json(rows);
        }
    })
})
